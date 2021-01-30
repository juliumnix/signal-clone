import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {Button, Input, Text} from 'react-native-elements';

const HomeScreen = () => {
  return (
    <View>
      <StatusBar style="light"/>
      <Text h3 style={{padding: 10}}>
        Voce está na tela principal 
      </Text>
    </View>
  )

}

export default HomeScreen;

const styles = StyleSheet.create({})