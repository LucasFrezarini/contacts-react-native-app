import React from 'react';
import { 
  StyleSheet, 
  View,
  Text,
  Dimensions
} from 'react-native';

import PropTypes from "prop-types";
import { connect } from "react-redux";

import ContactForm from "../components/ContactForm";
import { save } from "../reducers/contact";
import { add } from "../reducers/contacts";

import Notification from "../components/notification/Notification";

const { height } = Dimensions.get("screen");

class NewContact extends React.Component {
  static navigationOptions = {
    title: "New Contact"
  }
  
  async submitHandler(values) {
    try {
      const data = values.toJS();
      data.phones = [];

      const res = await this.props.save(data);
      
      if(res.error) {
        throw new Error(res);
      }
  
      const responseData = res.payload.data;
      const contact =  responseData.payload.contact;
        
      await this.props.add(contact);
  
      Notification.show(null, "Contact saved successfully.");
      this.props.navigation.pop();
    } catch (error) {
      Notification.show(null, "Couldn't save the contact");
      console.error(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ContactForm
          submitHandler={this.submitHandler.bind(this)}
          initialValues={this.props.contact}
        />
      </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#311b92",
      minHeight: height,
      zIndex: 1
    },
  });

  NewContact.propTypes = {
    save: PropTypes.func,
    contact: PropTypes.object
  }

  const mapStateToProps = state => {
    return {
      contact: state.contact.data,
    }
  }

  const mapDispatchToProps = {
    add,
    save,
  }

  export default connect(mapStateToProps, mapDispatchToProps)(NewContact);