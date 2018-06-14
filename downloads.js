/**
 * Downloads Tab
 */

import React, { Component } from 'react'; 

import {
  View,
  Text
} from 'react-native';

var styles = require('./styles');

export default class TabDownloads extends Component {

  render() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>Downloads</Text>
      </View>
    );
  }

}