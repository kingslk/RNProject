import { createStackNavigator } from 'react-navigation';
import TabStack from './TabStack';
import ThreeDetail from '../pages/Three';
// const TabScreen = createStackNavigator(TabStack);
export default (DetailStack = createStackNavigator({
  Tab: { screen: TabStack },
  Detail: { screen: ThreeDetail }
}));
