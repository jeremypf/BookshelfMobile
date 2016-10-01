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
    width: (windowWidth - 20) * 0.5 - 5,
    height: windowWidth * 0.6,
    backgroundColor: 'skyblue',
    marginBottom: 10
  },

});