import React, { Component } from 'react';
import Hr from 'react-native-hr';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import { BooksListView, BookView } from './BooksNearbyView';
import styles from './../styles/stylesheet';

export default class ProfileView extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <ProfileBadge/>
          <Hr style={styles.hr} lineColor='#dddddd'/ >
          <BorrowedBooks borrowed={this.props.items.length} items={this.props.items}/>
        </View>
      </ScrollView>
    );
  }
}

class BorrowedBooks extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={{marginTop: 20, alignSelf: 'stretch', flex: 1}}>
        <Text style={{fontSize: 20, marginBottom: 5}}>Currently Borrowed</Text>
        <Text style={styles.h4}> {this.props.borrowed} in total</Text>
        <View style= {{marginTop: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          {
            this.props.items.map( (item, i) => (
              <BookView/>
            ))
          }
        </View>
      </View>
    );
  }
}

class ProfileBadge extends Component {
  constructor (props) {
    super(props);
  }

  _onPressButton() {
    console.log('pressed!');
  }

  render() {
    return (
      <View style={styles.profilebadge}>
        <TouchableHighlight onPress={this._onPressButton}>
          <View style={{width: 60, height: 60, backgroundColor: 'red', borderRadius: 60}} />
        </TouchableHighlight>
        <View style={styles.texts}>
          <Text style= {{fontSize: 26, marginBottom: 5}}>John Salaveria</Text>
          <Text style= {styles.h4} >@johnsington</Text>
        </View>
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