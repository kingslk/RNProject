import Drawsecond from '../pages/DrawSecond';
import DetailStack from './DetailStack';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
//创建stack能独立控制每个stack的options

const aaa = createStackNavigator({
  bbb: { screen: Drawsecond },
});
const DrawStack = createDrawerNavigator({
  Detail: {
    screen: DetailStack,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <AntDesign name={'home'} size={25} color={tintColor} />
      ),
      activeTintColor: 'blue',
      inactiveTintColor: 'gray'
    }
  },
  Second: {
    screen: aaa,
    navigationOptions: {
      drawerLabel: 'MyAbility',
      drawerIcon: ({ tintColor }) => (
        <AntDesign name={'user'} size={25} color={tintColor} />
      ),
      activeTintColor: 'blue',
      inactiveTintColor: 'gray'
    }
  }
});

export default DrawStack;
