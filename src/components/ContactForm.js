import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import { reduxForm, Field } from "redux-form/immutable";
import FormInput from "./FormInput";

import PropTypes from "prop-types";

const required = (v) => v ? undefined : "Required"

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Field
          name="firstName"
          component={FormInput}
          placeholder="Type the contact's first name..."
          validate={required}
          label="First Name"
        ></Field>
        <Field
          name="lastName"
          component={FormInput}
          placeholder="Type the contact's last name..."
          validate={required}
          label="Last Name"
        ></Field>
        <Field
          name="email"
          component={FormInput}
          placeholder="Type the contact's email..."
          validate={required}
          label="Email"
        ></Field>

        <TouchableOpacity 
          onPress={handleSubmit(this.props.submitHandler)}
          style={styles.submit}
        >
          <Text style={styles.submitText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15
  },
  submit: {
    borderWidth: 1,
    backgroundColor: "#311b92",
    justifyContent: "center",
    alignItems: "center",
    padding: 2
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default reduxForm({ form: "contact", enableReinitialize: true })(ContactForm);