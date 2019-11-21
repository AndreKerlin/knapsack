import React from 'react';
import Lobby from '../components/Lobby/Lobby'

export default function LobbyScreen() {

  return (
    <Lobby/>
  )
}

LobbyScreen.navigationOptions = {
  title: 'Character Selection',
  headerStyle: {
    backgroundColor: '#636363',
  },
  headerTintColor: '#fff',
};
