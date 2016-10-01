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

var windowWidth = Dimensions.get('window').width; 


export default class BooksNearby extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
            <BooksListView style={{flex: 1}}/>
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


class BookView extends Component {
  render() {
    return (
      <View style={{width: windowWidth * 0.4, height: windowWidth * 0.6, backgroundColor: 'skyblue', margin: 10}} />
      );
  }
}



class BooksListView extends Component {
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
      <View style={{paddingTop: 22, flex: 1}}>
        <ListView contentContainerStyle={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <BookView/>}
        />
      </View>
    );
  }
}

//          renderRow={(rowData) => <Text style={styles.item}>{rowData}</Text>}




const styles = StyleSheet.create({
  list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: 'blue',
        margin: 3,
        width: 100,
        height: 10
    },
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

