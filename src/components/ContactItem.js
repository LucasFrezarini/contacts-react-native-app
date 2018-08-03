import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
} from 'react-native';

import PropTypes from "prop-types";

class ContactItem extends React.Component {
    render() {
      return (
          <View style={styles.contactsList}>
            <View style={styles.contactContainer}>
              <Image
                style={styles.contactPhoto}
                source={require("../assets/img/user-icon.png")}
              />
              <View style={styles.contactDescription}>
                <Text>{this.props.name}</Text>
                <Text>{this.props.phone}</Text>
              </View>
            </View>
          </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      
    },
    search: {
      margin: 15,
      height: 40,
      fontSize: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#bbb",
    },
    contactContainer: {
      padding: 3,
      borderBottomWidth: 1,
      borderBottomColor: "#bbb",
      backgroundColor: "#fff",
      height: 77,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row"
    },
    contactDescription: {
      flex: 2,
      marginLeft: 10,
    },
    contactPhoto: {
      width: 65,
      height: 65,
    }
  });

  ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }

  export default ContactItem;