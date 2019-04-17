import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.hideLogin = this.hideLogin.bind(this);
    this.showLoginPage = this.showLoginPage.bind(this);
  }

  showLoginPage() {
    document.getElementById("overlay").style.visibility = "visible";
  }

  hideLogin() {
    const name = document.getElementById('login-box').value;
    if(!name) return;
    fetch("/addUser", {method:"POST", body: name}).then(res => res.text()).then(money=>{
      document.getElementById("current-balance").innerText = money;
    });
    document.getElementById("username").innerText = name;
    document.getElementById("username").style.fontSize = "25px";
    document.getElementById("username").style.fontWeight = "800";
    document.getElementById("overlay").style.visibility = "hidden";
  }

  showAddMoney() {
    document.getElementById("add-money").style.visibility = "visible";
  }

  hideAddMoney() {
    const ammount = +document.getElementById('add-money-box').value;
    const username = document.getElementById('login-box').value;
    if(!ammount || ammount < 0) return;
    if(!username){
      document.getElementById("add-money").style.visibility = "hidden";
      return alert("login to add money");
    };
    const totalBalance = +document.getElementById("current-balance").innerText + +ammount;
    document.getElementById("current-balance").innerText = totalBalance;
    fetch("/addMoney", {method:"POST", body: JSON.stringify({totalBalance, username})});
    document.getElementById("add-money").style.visibility = "hidden";
  }

  rotateMenu(){
    const classnames = ["active", "menu"];
    const currentClass = document.getElementById("menu").className;
    const futureClass = classnames.find(singleClass => singleClass !== currentClass); 
    document.getElementById("menu").className = futureClass;
  }

  render() {
    return (
      <div className="main">
        <div className="overlay" id="overlay">
          <div className="popup">
            <input id="login-box" placeholder="Enter Username"/>
            <button onClick={this.hideLogin}> Login </button>
          </div>
        </div>
        <div className="overlay" id="add-money">
          <div className="popup">
            <input id="add-money-box" placeholder="Enter Amount To Add" />
            <button onClick={this.hideAddMoney}>Add Money</button>
          </div>
        </div>

        <div className="paytm-logo">
          <span className="menu" id="menu" onClick={this.rotateMenu.bind(this)}>III</span>
          <img className="logo" src="https://bit.ly/2X8qxx9" alt="paytm" />
        </div>
        <div className="search">
          <i className="fas fa-search">&nbsp;&nbsp;</i>
          <input
            className="search"
            type="search"
            placeholder="Search for a Product, Brand or Category"
          />
        </div>
        <div>
          <i onClick={this.showAddMoney} className="fas fa-wallet wallet">
            <span className="balance"> Rs.<span id="current-balance">0.00</span></span>
          </i>
        </div>
        <div>
          <i className="fas fa-shopping-bag" />
          No Item in Your Bag
        </div>
        <div onClick={this.showLoginPage} style={{ cursor: "pointer" }} id="username">
          <i className="fas fa-user-plus" /> Log In/Sign Up
        </div>
      </div>
    );
  }
}

export default Header;
