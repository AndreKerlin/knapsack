import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { placeholder } from '@babel/types';

export default class LoginForm extends Component {
  render() {
    return (
        
      <View style={styles.container}>
          <TextInput placeholder="Username/Email" 
           style={styles.input} />
          <TextInput placeholder="Password" secureTextEntry
          style={styles.input} />
          <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>

    
          <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Don't have an account yet?</Text>
             <TouchableOpacity>
                 <Text style={styles.signupButton}> Register Now</Text>
             </TouchableOpacity> 
          </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
       padding: 20
    },
    input: {
        height: 40,
        backgroundColor: '#3A3939',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 12,
        color: '#FFFFFF'
    },
    buttonContainer: {
        backgroundColor: '#000000',
        paddingVertical:10,
        borderRadius: 8
    },

    buttonText: {
        textAlign: 'center',
        color: '#06531D',
        fontWeight: '500',
        fontSize: 18
    },

    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent:"center",
        paddingTop: 50,
        paddingBottom: 30,
        flexDirection: "row"
    },

    signupText:{
        color: "#000000",
        fontSize: 16
    },

    signupButton: {
        color: "#06531D",
        fontSize: 16,
        fontWeight: '500',
        textDecorationLine: 'underline'
        
    }
});

