import React from "react";
import buttonWrapper from "../HOC/buttonWrapper";

function Button(props) {
  return <button style={props.style}>HOC Button</button>;
}

export default buttonWrapper(Button);
