
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


export default class BookDetailsView extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
            <Header title="Book Details"/>
            <ScrollView>
              <View style={styles.detailscontainer}>
                <View style={{flex: 1, backgroundColor:'blue', justifyContent: 'center'}}>

                </View>
                <View style={{flex: 2}}>
                    <Text style={{margin:10, fontSize: 20}}>Brothers & Beasts</Text>
                    <Text style={{margin:10, fontSize: 16}}>Author: Bob</Text>
                    <Text style={styles.subtitle}>Published: Sept. 2015</Text>
                    <Text style={{margin:10, fontSize: 12,color:'green', fontWeight:'bold'}}>Available</Text>
                    <Text style={{margin:10, width:100,height:20, fontSize: 13, fontWeight: 'bold' , backgroundColor:'orange', color: 'white', textAlign:'center', borderRadius:10}}>BORROW</Text>

                </View>
              </View>
              <Text style={styles.title}>Synopsis</Text>
              <Text style={styles.subtitle}>This is where the Synopsis of the book goes</Text>
              <Text style={styles.title}>Book Owners</Text>
              
              <BookOwnerListItem name="Jeremy"/>
              <BookOwnerListItem name="John"/>
            </ScrollView>
      </View>
    );
  }
}

class BookOwnerListItem extends Component {

  render() {
    return (
      <View style={{flex:1,flexDirection: 'row', height:50, alignItems: 'center',justifyContent: 'space-between'}}>
        <Text style={{margin:14, fontSize: 18}}>{this.props.name}</Text>
        <Text style={{margin:14, fontSize: 12, textAlign: 'right',color:'green', fontWeight:'bold'}}>Available</Text>
      </View>
    );
  }
}
