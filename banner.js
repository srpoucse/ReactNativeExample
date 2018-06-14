
import React, { PureComponent } from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

var styles = require('./styles');

export default class Banner extends PureComponent {
    state = {
        isConnected: true
    };
    
      componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
      }
    
      componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
      }
    
      handleConnectivityChange = isConnected => {
         this.setState({ isConnected });
      };
  
    render() {
        if (this.state.isConnected) {
            message = "Connected"
        } else {
            message = "No Internet Connection"
        }

        return(
            <View style={[styles.bannerContainer, this.state.isConnected ? styles.connected : styles.notConnected]}>
            <Text style={styles.bannerText}> {message} </Text>
         </View>

        )
        if (!this.state.isConnected) {
            
        } else {
           return null 
        }
    }
}