import React from "react";
import buttonWrapper from "../HOC/buttonWrapper";

function Button(props) {
  return (
    <button onClick={props.handleIncrement} style={props.style}>
      HOC Button :{props.count}
    </button>
  );
}

export default buttonWrapper(Button);
