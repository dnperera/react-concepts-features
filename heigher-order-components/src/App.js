import React, { Component } from "react";
import Button from "./components/Button";
import buttonWrapper from "./HOC/buttonWrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to React Higer Order Component</h1>
        <Button disable />
      </div>
    );
  }
}

const Lable = props => (
  <Lable onMouseOver={props.handleCount}>Current Cout :{props.count}</Lable>
);

export default App;
