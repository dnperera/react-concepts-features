import React, { Component } from "react";
import { increaseCount } from "../state/state-chnage";
import buttonStyles from "../styles/hoc-styles";

const buttonWrapper = function(BasicComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    handleIncrement = () => {
      this.setState(increaseCount);
    };
    render() {
      let _style = buttonStyles.default;
      if (this.props.disable) {
        _style = { ...buttonStyles.default, ...buttonStyles.disable };
      }
      return (
        <div>
          <BasicComponent
            {...this.state}
            handleIncrement={this.handleIncrement}
            style={_style}
          />
        </div>
      );
    }
  };
};

export default buttonWrapper;
