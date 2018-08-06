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
  baseURL: "http://192.168.0.6:3400/api",
  responseType: "json",
});

client.defaults.headers.common['Authorization'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNjdhZTc4ZmE5ZTk4MTZiYWNkMmI2YiIsInVzZXJuYW1lIjoiZG9nZSIsImlhdCI6MTUzMzUyMTUzNH0.7k6Oqp6Xs5BUiuc_py_AZKHO9lEXCvO3wh84f8g_zPQ";
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

