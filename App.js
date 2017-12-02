/* 
  ACIT 3650

  Must install!!!
   npm install
   npm install react-navigation --save
   npm install react-native-vector-icons --save
   
*/

import React, { Component } from 'react';
import { StyleSheet,
         Text,
         View } from 'react-native';
import { StackNavigator } from 'react-navigation';


import HomeScreenComponent from "./components/HomeScreenComponent";
import MainComponent from "./components/MainComponent";
import InfoComponent from "./components/InfoComponent";
import SpaceShip from "./components/SpaceShip";

const SpaceApp = StackNavigator({
  Home: {
    screen: HomeScreenComponent
  },
  Main: {
    screen: SpaceShip
  },
  Info: {
    screen: InfoComponent
 }
},{ 
    headerMode: 'screen' 
  });

export default class App extends React.Component {

  render() {
    return (
        <SpaceApp />
    );
  }
}
