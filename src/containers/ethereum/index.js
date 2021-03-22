/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from "react";
import { PageHeader, Button } from "antd";
import { useHistory } from "react-router";
import { getPublic } from "@toruslabs/eccrypto";
import OpenLogin from "@toruslabs/openlogin";
import { verifiers } from "../../utils/config";
import "./style.scss";


function Ethereum() {
  const [sdk, setSdk] = useState(undefined);
  const [userInfo, setUserInfo] = useState({});
  const history = useHistory();
  useEffect(() => {
    async function initializeUserInfo() {
      const sdkInstance = new OpenLogin({ clientId: verifiers.google.clientId, iframeUrl: "http://beta.openlogin.com" });
      await sdkInstance.init();
      if (!sdkInstance.privKey) {
        await sdkInstance.login({
          loginProvider: "google",
          redirectUrl: "http://localhost:3020/solana",
        });
      }
      const privateKey = sdkInstance.privKey;
      setSdk(sdkInstance);
      const pubKey = await getPublic(Buffer.from(privateKey, "hex"));
      setUserInfo({
        PUBKEY: pubKey.toString("hex"),
        PRIVATE_KEY: privateKey,
    });
    }
    initializeUserInfo();
  }, []);


  const handleLogout = async () => {
    await sdk.logout();
    history.push("/");
  };
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Your secrets are safe here"
        extra={[
          <Button key="1" type="primary" onClick={handleLogout}>
            Logout
          </Button>,
        ]}
      />
   
        <div className="container">
          <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <h1 style={{ textAlign: "center", marginRight: "100px" }}>Solana</h1>
          </div>
        </div>
    </div>
  );
}

export default Ethereum;
