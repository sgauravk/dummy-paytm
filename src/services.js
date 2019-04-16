import React, { Component } from "react";
import "./services.css";
import Service from "./sercive";

class Services extends Component {
  render() {
    return (
      <ul>
        <Service className="fas fa-mobile-alt" name="Mobile" />
        <Service className="far fa-lightbulb" name="Electricity" />
        <Service className="fas fa-coins" name="Gold" />
        <Service className="fas fa-book" name="Fees" />
        <Service className="fas fa-phone-volume" name="Landline" />
        <Service className="fab fa-usb" name="DataCard" />
        <Service className="fas fa-satellite-dish" name="DTH" />
        <Service className="fas fa-tv" name="CableTv" />
        <Service className="fas fa-subway" name="Metro" />
        <Service className="fab fa-foursquare" name="Forex" />
        <Service className="fas fa-hands" name="Flood Relief" />
        <Service className="fas fa-ellipsis-h" name="More" />
      </ul>
    );
  }
}

export default Services;
