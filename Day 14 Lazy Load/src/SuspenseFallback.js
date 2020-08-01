import React, { Component } from "react";

class SuspenseFallback extends Component {
  constructor() {
    super();

    console.log("SuspenseFallback");
  }

  render() {
    return <div>HOME</div>;
  }
}

export default SuspenseFallback;
