import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import LoginForm from './LoginFor'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image 
            style={styles.logo}
            source={require('../../assets/images/logo.png')}/>
        </View>
        <View style={styles.formContainer}>
        {/* <LoginForm/> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 100,
    },
    logo: {
      height: 200,
      width: 200
    },
    formContainer: {

    },
})
