'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ProfileView extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Hi!</Text>
        {
          this.props.items.map( (item, i) => (
            <BookItem title={item.title}/>
          ))
        }
      </View>
    );
  }
}

class BookItem extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <View>
        <Text>
          Book: {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});