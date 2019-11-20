import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { placeholder } from '@babel/types';

export default class LoginForm extends Component {
  render() {
    return (
     <KeyboardAvoidingView behavior="padding" style={styles.container}>  
      <View style={styles.container}>
          <TextInput placeholder="Username/Email" 
           style={styles.input} />
          <TextInput placeholder="Password" secureTextEntry
          style={styles.input} />

          <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView> 
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
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#000000',
        paddingVertical:10,
        borderRadius: 8
    },
    buttonText: {
        textAlign: 'center',
        color: '#06531D',
        fontWeight: '700',
        fontSize: 25
    }
});

