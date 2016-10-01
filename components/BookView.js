import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

var windowWidth = Dimensions.get('window').width; 


export default class BookView extends Component {
  render() {
    return (
      <View style={styles.container} />
      );
  }
}


const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.6,
    backgroundColor: 'skyblue',
    margin: 10
  },

});