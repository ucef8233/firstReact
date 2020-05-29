/// 1er pas création du composent :
import React, { Component } from "react";
import Car from "./Cars";
class MyCar extends Component {
  noCopy = () => {
    alert("watareyyeh");
  };
  changeStyle = (e) => {
    e.target.classList.toggle("styled");
  };

  render() {
    return (
      <div>
        <h1 onCopy={this.noCopy}>{this.props.titre} </h1>
        <p onMouseOver={this.changeStyle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, vel!
        </p>
        <Car color="red"></Car>
        <Car>2</Car>
        <Car color="black">3</Car>
      </div>
    );
  }
}

export default MyCar; //// 2 exporter le composent
