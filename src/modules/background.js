import React, { Component } from 'react';
import background from "../assets/images/background-large.jpg";

class Background extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={background} alt="Background" />
        </div>
      </div>
    );
  }
}

export default Background;
