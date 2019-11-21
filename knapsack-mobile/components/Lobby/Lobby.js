import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";

export default class Lobby extends Component {
  render() {
    return (
      <View style={styles.container}>
          
        <View style={styles.headerContainer}>
        <AwesomeButton
            height={45}
            width={140}
            textSize={20}
            textColor={'#FFFFFF'}
            backgroundColor={'#06531D'} backgroundDarker={'#06331D'}
            style={styles.headerButton}
            onPress={next => {
                /** Do Something **/
                next();
              }}
            >New Character</AwesomeButton>
            <AwesomeButton
            height={45}
            width={140}
            textSize={20}
            textColor={'#FFFFFF'}
            backgroundColor={'#06531D'} backgroundDarker={'#06331D'}
            style={styles.headerButton}
            onPress={next => {
                /** Do Something **/
                next();
              }}
            >Player View</AwesomeButton>
        </View>
        <View style={styles.characterContainer}>
            <AwesomeButton
            height={50}
            width={300}
            textSize={24}
            textColor={'#FFFFFF'}
            backgroundColor={'#06531D'} backgroundDarker={'#06331D'}
            style={styles.characterButton}
            onPress={next => {
                /** Do Something **/
                next();
              }}
            >Eragorn</AwesomeButton>
            <AwesomeButton
            height={50}
            width={300}
            textSize={24}
            textColor={'#FFFFFF'}
            backgroundColor={'#06531D'} backgroundDarker={'#06331D'}
            style={styles.characterButton}
            onPress={next => {
                /** Do Something **/
                next();
              }}
            >Gimli the Brave</AwesomeButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        flex: 1,
        alignItems: "center",
        backgroundColor: "#636363"
    },
    characterButton: {
        marginTop: 10
    },
    characterContainer: {
      backgroundColor: '#d0c8b0',
      justifyContent: "center",
      alignItems: 'center',
      paddingBottom: 250,
      borderRadius: 10,
      width: 350,
      height: 400
    },
    logo: {
      height: 100,
      width: 100
    },
    headerContainer: {
        backgroundColor: '#d0c8b0',
        // flex: 1,
        flexDirection: "row",
        marginBottom: 25,
        height: 100,
        width: 350,
        alignItems:"center",
        justifyContent: "center",
        borderRadius: 10,  
    
    },

    headerButton: {
      marginHorizontal: 5,
    },

})
