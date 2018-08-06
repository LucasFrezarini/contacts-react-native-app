import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import Contacts  from "./src/screens/Contacts";
import NewContact from "./src/screens/NewContact";
import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import { StyleSheet } from "react-native";

import React from "react";

import reducers from "./src/reducers/root";

const client = axios.create({
  baseURL: "http://192.168.0.20:3400/api",
  responseType: "json",
});

client.defaults.headers.common['Authorization'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNjM2MTg2YWI0M2Q3MjEzZTNjNDM5YSIsInVzZXJuYW1lIjoibHVjYXMiLCJpYXQiOjE1MzM1NTc1MDF9.acrXaH3-dYZoAnKCcjNS9XKqiVekeaR-TxCh_F7Tq8k";
const store = createStore(reducers, applyMiddleware(
    axiosMiddleware(client)
));

const StackNavigator = createStackNavigator({
  Contacts: {
    screen: Contacts
  },
  NewContact: {
    screen: NewContact
  }
});

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <StackNavigator/>
      </Provider>
    )
  }
}

