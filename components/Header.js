import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 3, justifyContent: 'center'}}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.subtitle}>{this.props.subtitle}</Text>
        </View>
        <View style={{flex: 1}}>
            <View style={styles.menubutton}></View>
        </View>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 90, 
    flexDirection: 'row'
  },

  title: {
    fontSize: 26,
    textAlign: 'left',
    paddingLeft: 10,
    paddingTop: 40
  },
  subtitle: {
    textAlign: 'left',
    paddingLeft: 10,
    color: 'darkgrey'
  },
  menubutton: {
    height: 50,
    width: 50,
    backgroundColor: 'orange'
  }
});