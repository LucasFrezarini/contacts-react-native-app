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

  renderList() {
    if(!this.props.error) {
      return (
        <FlatList
          style={styles.contacts}
          data={this.props.contacts.get("list")}
          keyExtractor={(item) => item._id}
          renderItem={({item}) =>
            <ContactItem
              name={`${item.firstName} ${item.lastName}`}
              phone={item.phones.length > 0 ? item.phones[0].number : null}
            />
          }
        />
      )
    } else {
      return (
        <Text>Deu ruim</Text>
      )
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          {this.renderList()}
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
      flex: 1,
      backgroundColor: "#311b92",
      minHeight: height - 150,
      zIndex: 1,
    },
    contacts: {
      backgroundColor: "#fff",
      flex: 1,
    },
    addButton: {
      height: 55,
      width: 55,
      backgroundColor: "#311b92",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      bottom: 20,
      right: 20,
      borderRadius: 30,
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