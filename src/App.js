/* eslint-disable no-undef */
import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./containers/login";
import Solana from "./containers/solana";
import Binance from "./containers/binanceChain";
import Ethereum from "./containers/ethereum";
import Polygon from "./containers/polygon";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/solana" exact>
          <Solana />
        </Route>
        <Route path="/ethereum" exact>
          <Ethereum />
        </Route>
        <Route path="/binance" exact>
          <Binance />
        </Route>
        <Route path="/polygon" exact>
          <Polygon />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
