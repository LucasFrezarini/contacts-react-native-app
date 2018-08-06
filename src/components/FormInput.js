import React from "react";
import {
  TextInput,
  StyleSheet
} from "react-native";

import propTypes from "prop-types";
import CustomInput from "./CustomInput";

class FormInput extends React.Component {
  
  render() {
    const { input, ...inputProps } = this.props;

    return (
      <CustomInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
    )
  }
}

export default FormInput;