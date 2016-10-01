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
  View,
  ScrollView,
  ListView,
  Dimensions
} from 'react-native';

import Header from './Header.js';
import BookView from './BookView.js';
import styles from './../styles/stylesheet';

var windowWidth = Dimensions.get('window').width; 


export default class BooksNearbyView extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
            <Header title="Books NearBy" subtitle="In Waterloo"/>
            <BooksListView style={{flex: 1}}/>
      </View>

      /*<View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>

      <ScrollView>
          <Text style={{fontSize:96}}>TEESTTTTT</Text>
          <BookView/>
      </ScrollView>
      <ScrollView style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <BookView/>
        <BookView/>
        <BookView/>
        <BookView/>
        <BookView/>
      </ScrollView>*/
    );
            //<View style={{width: 150, height: 50, backgroundColor: 'steelblue'}} />

  }
}



export class BooksListView extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmjkdsfknkknky', 'Jackson', 'Jillian', 'Julie', 'Devin', 'test', 'sdfs'
      ])
    };
  }
  render() {
    return (
      <View style={{paddingTop: 20, paddingLeft: 16, flex: 1}}>
        <ListView contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <BookView/>}
        />
      </View>
    );
  }
}