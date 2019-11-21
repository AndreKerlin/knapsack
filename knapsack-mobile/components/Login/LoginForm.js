import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { placeholder } from '@babel/types';
import AwesomeButton from "react-native-really-awesome-button";

export default class LoginForm extends Component {
  render() {
    return (
        
      <View style={styles.container}>
          <TextInput placeholder="Username/Email" 
           style={styles.input} />
          <TextInput placeholder="Password" secureTextEntry
          style={styles.input} />
          <AwesomeButton height={50}
            width={350} backgroundColor={'#06531D'} backgroundDarker={'#06331D'}>
              <Text style={styles.buttonText}>LOGIN</Text>
          </AwesomeButton>

    
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
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 18
    },

    signupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent:"center",
        paddingTop: 40,
        paddingBottom: 20,
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

