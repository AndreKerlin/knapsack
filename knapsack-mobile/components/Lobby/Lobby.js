import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";

export default class Lobby extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
        <AwesomeButton
            height={50}
            width={125}
            textSize={20}
            textColor={"#000"}
            style={styles.characterButton}
            onPress={next => {
                /** Do Something **/
                next();
              }}
            >Join Game</AwesomeButton>
            <AwesomeButton
            height={50}
            width={125}
            textSize={20}
            textColor={"#000"}
            style={styles.characterButton}
            onPress={next => {
                /** Do Something **/
                next();
              }}
            >Create Game</AwesomeButton>
        </View>
        <View style={styles.characterContainer}>
            <AwesomeButton
            height={50}
            width={250}
            textSize={24}
            textColor={"#000"}
            style={styles.characterButton}
            onPress={next => {
                /** Do Something **/
                next();
              }}
            >Eragorn</AwesomeButton>
            <AwesomeButton
            height={50}
            width={250}
            textSize={24}
            textColor={"#000"}
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
        marginTop: 25,
        flex: 1,
        alignItems: "center"
    },
    characterButton: {
        marginTop: 10
    },
    characterContainer: {
    },
    logo: {
      height: 100,
      width: 100
    },
    headerContainer: {
        // flex: 1,
        // flexDirection: "row",
    },
})
