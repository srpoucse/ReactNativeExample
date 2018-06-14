import React, { Component } from 'react';
import TabFavorites from './favorites';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  TabBarIOS,
} from 'react-native';

/**
 * React Native Starter: TabBarIOS
 * https://github.com/joshbuchea/react-native-starter-tabbarios
 */
'use strict';

class VisionTabBarIOS extends Component {

  constructor(props) {
    super(props);
    this.state = {selectedTab: 'tabFavorites'};
  }

  setTab(tabId) {
    this.setState({selectedTab: tabId});
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="favorites"
          selected={this.state.selectedTab === 'tabFavorites'}
          onPress={() => this.setTab('tabFavorites')}>
          <TabFavorites/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="downloads"
          selected={this.state.selectedTab === 'tabDownloads'}
          onPress={() => this.setTab('tabDownloads')}>
          <TabDownloads/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab === 'tabMore'}
          onPress={() => this.setTab('tabMore')}>
          <TabMore/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

}

/**
 * Downloads Tab
 */
class TabDownloads extends Component {

  render() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>Downloads</Text>
      </View>
    );
  }

}

/**
 * More Tab
 */
class TabMore extends Component {

  render() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>More</Text>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    margin: 50,
    fontSize: 40
  }
});

AppRegistry.registerComponent('RNExample', () => VisionTabBarIOS);
