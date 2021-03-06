import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => this.swipeUpDownRef.showFull()}>
          {' '}
          Welcome to React Native!{' '}
        </Text>
        <SwipeUpDown
          hasRef={ref => (this.swipeUpDownRef = ref)}
          itemMini={
            <Text style={styles.welcome}>Welcome to React Native!</Text>
          }
          itemFull={
            <Text style={styles.instructions} onPress={() => this.swipeUpDownRef.showMini()}>
              {' '}Welcome to component {'\n'} Swipe Up Down on React Native{' '}
            </Text>
          }
          onShowMini={() => console.log('mini')}
          onShowFull={() => console.log('full')}
          disablePressToShow={false}
          style={{ backgroundColor: '#ccc' }}
          animation="easeInEaseOut"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: -5
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});