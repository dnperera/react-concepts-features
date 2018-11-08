import buttonStyles from "../styles/hoc-styles";

const translateProps = props => {
  let _style = { ...buttonStyles.default };
  if (props.disable) {
    _style = { ...buttonStyles.default, ...buttonStyles.disable };
  }
  const newProps = { ...props, style: _style };
  return newProps;
};
export default buttonComp => {
  return props => {
    return buttonComp(translateProps(props));
  };
};
