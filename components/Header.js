import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from './../styles/stylesheet';


export default class Header extends Component {
  render() {
    return (
      <View style={styles.headercontainer}>
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
