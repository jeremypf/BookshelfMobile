/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ProfileView from './components/ProfileView';

var items = [
  {
    title: 'Beasts & Mans',
    author: 'Mike Bernstein'
  },
  {
    title: '1984',
    author: 'George Orwell'
  }
];

class BookshelfMobile extends Component {
  render() {
    return (
      <ProfileView items={items}/>
    );
  }
}

AppRegistry.registerComponent('BookshelfMobile', () => BookshelfMobile);

