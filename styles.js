var React = require('react-native');

var {
  StyleSheet,
  Dimensions,
} = React;

var WINDOW_WIDTH = Dimensions.get('window').width
var WINDOW_HEIGHT = Dimensions.get('window').height

module.exports = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    margin: 50,
    fontSize: 30
  } ,
  banner: {
    backgroundColor: '#157DB9',
    flex:1,
    flexDirection:'row',
  } , 
  
  bannerContainer: {
    height: 30,
    padding: 5,
    flexDirection: 'row',
    width: WINDOW_WIDTH,
    position: 'absolute',
    top: 30,    
  },

  bannerText: { 
    color: '#fff'
  },

  connected: {
    backgroundColor: 'blue',
  }, 

  notConnected: {
    backgroundColor: '#b52424',
  },


});


