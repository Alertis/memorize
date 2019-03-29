/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { openDatabase,deleteDatabase } from 'react-native-sqlite-storage';

const db=openDatabase({name : 'memorize.db'});

export default class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      records: []
    }
  }
  componentWillMount(){
    db.transaction((tx) => {
      tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='words'", [], (tx, results) => {
        console.log('item:', results.rows.length);
        console.log("Query completed");
      })
    })
   
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>ad</Text>
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
