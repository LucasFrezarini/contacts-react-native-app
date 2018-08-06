import React from 'react';
import { 
  StyleSheet, 
  View,
  TextInput,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { load } from "../reducers/contacts";

import ContactItem from "../components/ContactItem";
import CustomInput from "../components/CustomInput";

const { height } = Dimensions.get("screen");

class Contacts extends React.Component {
  static navigationOptions = {
    title: "Contacts"
  }

  componentDidMount() {
    this.props.load();
  }

  add() {
    this.props.navigation.push("NewContact")
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <CustomInput
              placeholder="Search for contacts..."
              placeholderTextColor="#fff"
              style={styles.search}
            />
          </View>
          <FlatList
            style={styles.contacts}
            data={this.props.contacts.get("list")}
            keyExtractor={(item) => item._id}
            renderItem={({item}) =>
              <ContactItem
                name={item.firstName}
                phone={item.phones.length > 0 ? item.phones[0].number : null}
              />
            }
          />
          <TouchableOpacity 
            onPress={this.add.bind(this)}
            style={styles.addButton}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
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
    contacts: {
      backgroundColor: "#fff"
    },
    search: {
      margin: 15,
      height: 40,
      fontSize: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#bbb",
      color: "#fff",
    },
    addButton: {
      height: 55,
      width: 55,
      backgroundColor: "#311b92",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      bottom: 145,
      right: 20,
      borderRadius: 60,
      zIndex: 1000,
    },
    addButtonText: {
      color: "#fff",
      fontSize: 20,
    }
  });

  Contacts.propTypes = {
    load: PropTypes.func,
    contacts: PropTypes.object
  }

  const mapStateToProps = state => {
    return {
      contacts: state.contacts,
    }
  }

  const mapDispatchToProps = {
    load
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Contacts);