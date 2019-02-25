import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Tabs from './src/index'

export default class App extends Component {
  state = {
    cities: [],

  }
  render() {
    return (
      <Tabs />
    );
  }
}
