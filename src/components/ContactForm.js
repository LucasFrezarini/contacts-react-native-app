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

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const formStates = ['asyncValidating', 'dirty', 'pristine', 'valid', 'invalid', 'submitting',
    'submitSucceeded', 'submitFailed'];

    const { handleSubmit } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Text>First Name</Text>
        <Field
          name="firstName"
          component={FormInput}
          placeholder="Type the contact's first name..."
          
        ></Field>
        <Text>Last Name</Text>
        <Field
          name="lastName"
          component={FormInput}
          placeholder="Type the contact's last name..."
        ></Field>
        <Text>Email</Text>
        <Field
          name="email"
          component={FormInput}
          placeholder="Type the contact's email..."
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