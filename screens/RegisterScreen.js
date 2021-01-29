import React from 'react';
import {KeyboardAvoidingView ,StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';

const RegisterScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />

      <Text h3 style={{ marginBottom: 50}}>
        RegisterScreen is open
      </Text>

      <View style={styles.inputContainer}>

      </View>

    </KeyboardAvoidingView>

  )

}
export default RegisterScreen

const styles = StyleSheet.create({
  container:{},
})