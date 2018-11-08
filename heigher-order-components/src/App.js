import React, { Component } from "react";
import Button from "./components/Button";

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

export default App;
