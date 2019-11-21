import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
 
  
  render() {
    return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
            <Image 
            style={styles.logo}
            source={require('../../assets/images/KSACKbag.png')}/>
            <Image 
            style={styles.logotext}
            source={require('../../assets/images/logotypegreen.png')}/>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
    </KeyboardAvoidingView>  
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#636363'
    },
    logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
    },
    logo: {
      height: 275,
      width: 275
    },
    title: {
      fontSize: 60,
    },
    logotext: {
      height: 500,
      width: 500,
      marginRight: 40,
      marginTop: -190,
      marginBottom: -225,
      alignItems: 'center'
    }
});

