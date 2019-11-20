import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import LoginForm from './LoginForm';
import { Asset, Font} from 'expo';

export default class Login extends Component {
 
  
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image 
            style={styles.logo}
            source={require('../../assets/images/KnapSACKBag.png')}/>
            <Image 
            style={styles.logotext}
            source={require('../../assets/images/logotypegreen.png')}/>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View>
      </View>
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
      height: 200,
      width: 200
    },
    title: {
      fontSize: 60,
    },
    logotext: {
      height: 500,
      width: 500,
      marginRight: 40,
      marginTop: -160,
      marginBottom: -225,
      alignItems: 'center'
    }
});
