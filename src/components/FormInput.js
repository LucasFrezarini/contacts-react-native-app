import React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text
} from "react-native";

import propTypes from "prop-types";
import CustomInput from "./CustomInput";

class FormInput extends React.Component {
  
  render() {
    const { input, meta, label, ...inputProps } = this.props;
    const { touched, error, warning } = meta;

    return (
      <View style={{marginBottom: 5}}>
        <Text style={touched && error ? styles.error : undefined}>{ label }</Text>
        <CustomInput
          {...inputProps}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
          style={touched && error ? styles.errorInput: undefined}
          placeholderTextColor={touched && error ? "red" : undefined}
        />
        <View>
        {touched &&
          ((error && <Text style={styles.error}>{error}</Text>) ||
            (warning && <Text>{warning}</Text>)) }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    error: {
      color: "red",
    },
    errorInput: {
      height: 44,
      fontSize: 16,
      borderBottomWidth: 1,
      borderBottomColor: "red",
      marginBottom: 5,
    }
})

export default FormInput;