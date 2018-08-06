import React from "react";
import {
  TextInput,
  StyleSheet
} from "react-native";

import propTypes from "prop-types";

class CustomInput extends React.Component {
  
  render() {
    const { ...inputProps } = this.props;

    return (
      <TextInput
        {...inputProps}
        underlineColorAndroid={this.props.underlineColorAndroid}
        placeholderTextColor={this.props.placeholderTextColor}
        style={this.props.style}
      />
    )
  }
}

const styles = StyleSheet.create({
  search: {
    height: 44,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    marginBottom: 15,
  },
});

CustomInput.defaultProps = {
  underlineColorAndroid: "transparent",
  style: styles.search
}

CustomInput.propTypes = {
  underlineColorAndroid: propTypes.string,
  placeholderTextColor: propTypes.string,
  style: propTypes.any
}

export default CustomInput;