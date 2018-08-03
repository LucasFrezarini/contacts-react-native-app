import React from 'react';
import { 
  StyleSheet, 
  View,
  TextInput,
  FlatList,
} from 'react-native';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { load } from "../reducers/contacts";

import ContactItem from "../components/ContactItem";

class Contacts extends React.Component {
  componentDidMount() {
    this.props.load();
    
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.search}
          placeholder="Pesquisar contatos..."
          underlineColorAndroid="transparent"
        />
        <FlatList
          data={this.props.contacts.get("list")}
          keyExtractor={(item) => item._id}
          renderItem={({item}) =>
             <ContactItem
              name={item.firstName}
              phone={item.phones.length > 0 ? item.phones[0].number : null}
            />
          }
        />
      </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    search: {
      margin: 15,
      height: 40,
      fontSize: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#bbb",
    },
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