import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import Contacts  from "./src/screens/Contacts";
import { createStackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import React from "react";

import reducers from "./src/reducers/root";

const client = axios.create({
  baseURL: "http://10.0.2.2:3400/api",
  responseType: "json",
});

client.defaults.headers.common['Authorization'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNjM2MTg2YWI0M2Q3MjEzZTNjNDM5YSIsInVzZXJuYW1lIjoibHVjYXMiLCJpYXQiOjE1MzMzMTY5NjZ9.HIgwdKYSczn_YLuVpTiszETTRH1psL44dfdkSmghXsw";
const store = createStore(reducers, applyMiddleware(
    axiosMiddleware(client)
));

const StackNavigator = createStackNavigator({
  Contacts: {
    screen: Contacts
  },
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
