
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Dimensions
} from 'react-native';

import Header from './Header.js';
import BookView from './BookView.js';

var windowWidth = Dimensions.get('window').width; 


export default class BookDetailsView extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
            <Header title="Book Details"/>
      </View>
    );
  }
}
