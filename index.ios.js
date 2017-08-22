import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Start from './app/components/Start/Start';
import About from './app/components/About/About';
import Contact from './app/components/Contact/Contact';

export default class mymobileapp extends Component {
  render() {
    return (
      <View>
        <Start />
        <About />
        <Contact />
      </View>
    );
  }
}


AppRegistry.registerComponent('mymobileapp', () => mymobileapp);
