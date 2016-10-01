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
import Header from './components/Header';
import BooksNearbyView from './components/BooksNearbyView';
import BookDetailsView from './components/BookDetailsView';

var items = [
  {
    title: 'Beasts & Mans',
    author: 'Mike Bernstein'
  },
  {
    title: '1984',
    author: 'George Orwell'
  },
  {
    title: '1984',
    author: 'George Orwell'
  },
  {
    title: '1984',
    author: 'George Orwell'
  },
  {
    title: '1984',
    author: 'George Orwell'
  },
  {
    title: '1984',
    author: 'George Orwell'
  }
];

class BookshelfMobile extends Component {
  render() {
    return (
      //<BookDetailsView/>
      //<BooksNearbyView/>
      //<ProfileView items={items}/>
      <View style={{flex:1}}>
        <BooksNearbyView />
      </View>
    );
  }
}

AppRegistry.registerComponent('BookshelfMobile', () => BookshelfMobile);

