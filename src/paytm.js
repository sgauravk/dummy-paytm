import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import Services from "./services";

class Paytm extends Component {
  render() {
    return (
      <div>
        <Header />
        <Services />
        <div className="offers">
          <img className="cashback" src="https://bit.ly/2UCXdSw" alt="img" />
          <img className="vivo" src="https://bit.ly/2GpXoIp" alt="img" />
        </div>
      </div>
    );
  }
}

export default Paytm;
