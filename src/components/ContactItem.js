import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import PropTypes from "prop-types";

class ContactItem extends React.Component {
    render() {
      return (
        <View>
          <TouchableOpacity 
            style={styles.contactsList}
          >
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
          </TouchableOpacity>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    contactContainer: {
      flex: 1,
      padding: 3,
      borderBottomWidth: 1,
      borderBottomColor: "#bbb",
      height: 77,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
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
    phone: PropTypes.string,
  }

  export default ContactItem;