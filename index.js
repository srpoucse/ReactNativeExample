import React, { Component } from 'react';
import TabFavorites from './favorites';
import TabDownloads from './downloads';
import TabMore from './more';

import {
  AppRegistry,
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

AppRegistry.registerComponent('RNExample', () => VisionTabBarIOS);
