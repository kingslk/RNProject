import HomeDetail from '../pages/HomeDetail';
import MineDetail from '../pages/MineDetail';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import { Button } from 'react-native';
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation';

export default (TabStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeDetail
    },
    Mine: {
      screen: MineDetail
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home`;
        } else if (routeName === 'Mine') {
          iconName = `user`;
        }
        return <AntDesign name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray'
    },
    animationEnabled: false,
    swipeEnabled: false
  }
));
TabStack.navigationOptions = ({ navigation }) => {
  // 监听路由事件
  // 将header设为null可隐藏标题栏
  let { routeName } = navigation.state.routes[navigation.state.index];
  let headerTitle = routeName;
  let buttonName = '';
  if (routeName === 'Home') {
    buttonName = 'Home抽屉';
  } else if (routeName === 'Mine') {
    buttonName = 'Mine抽屉';
  }
  let headerRight = buttonName;
  return {
    headerTitle,
    headerRight: (
      <Button title={headerRight} onPress={() => navigation.openDrawer()} />
    )
  };
};
