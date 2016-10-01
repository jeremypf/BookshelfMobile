import React, { Component } from 'react';
import Hr from 'react-native-hr';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class ProfileView extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ProfileBadge/>
        <Hr style={styles.hr} lineColor='#dddddd'/ >
        <BorrowedBooks borrowed='5'/>
      </View>
    );
  }
}

class BorrowedBooks extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={{marginTop: 20, alignSelf: 'stretch'}}>
        <Text style={{fontSize: 20, marginBottom: 5}}>Currently Borrowed</Text>
        <Text style={styles.h4}> {this.props.borrowed} in total</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    alignItems: 'flex-start'
  },
  texts: {
    paddingLeft: 10,
    justifyContent: 'center'
  },
  profilebadge: {
    flexDirection: 'row',
    height: 60,
    alignSelf: 'stretch',
    marginBottom: 20
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  h4: {
    fontSize: 16,
    color: '#828282'
  }
});