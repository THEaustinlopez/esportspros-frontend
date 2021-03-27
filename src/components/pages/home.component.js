import React, { Component } from "react";
import ImageSlider from "../imageslider";
import { SliderData } from "../sliderdata";

export default class Home extends Component {
  render() {
    return (
      <div className="homepage-container">
        <div className="homepage-header">
          <h1>Featured Esports</h1>
        </div>

        <ImageSlider slides={SliderData} />
      </div>
    );
  }
}
