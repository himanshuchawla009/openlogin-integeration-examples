/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useHistory } from "react-router";
import OpenLogin from "@toruslabs/openlogin";
import { verifiers } from "../../utils/config";
import "./style.scss";

function Login() {
  const [chain, setChain] = useState("ethereum");
  async function handleLogin() {
    const sdkInstance = new OpenLogin({ clientId: verifiers.google.clientId, iframeUrl: "http://beta.openlogin.com" });
    await sdkInstance.login({
      loginProvider: "google",
      redirectUrl: `${window.origin}/${chain}`,
    });
  }
  return (
    <div className="loginContainer">
      <div className="loginContainer">
        <h1 style={{ textAlign: "center" }}>Openlogin integeration demo for multiple blockchains</h1>
        <select style={{ margin: 30 }} name="buildEnv" value={chain} onChange={(e)=>setChain(e.target.value)}>
            <option value="ethereum">Ethereum</option>
            <option value="solana">Solana</option>
            <option value="binance">Binance</option>
            <option value="polygon">Polygon</option>
        </select>
        <div onClick={handleLogin} className="btn">
          Login
        </div>
      </div>
    </div>
  );
}

export default Login;
