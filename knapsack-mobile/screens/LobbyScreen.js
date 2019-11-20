import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import Lobby from '../components/Lobby/Lobby'

export default function SettingsScreen() {

  return (
    <Lobby/>
  )
}

SettingsScreen.navigationOptions = {
  title: 'Character Selection',
};
