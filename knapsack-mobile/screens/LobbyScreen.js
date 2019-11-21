import React from 'react';
import Lobby from '../components/Lobby/Lobby'

export default function LobbyScreen() {

  return (
    <Lobby/>
  )
}

LobbyScreen.navigationOptions = {
  title: 'Your Characters',
  headerStyle: {
    backgroundColor: '#06531D',
  },
  headerTintColor: '#fff',
};
