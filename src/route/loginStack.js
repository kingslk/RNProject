import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import LoginStack from '../pages/User';
import DrawStack from './DrawStack';
// const User = createStackNavigator(
//   {
//     Login: { screen: LoginStack }
//   },
//   {
//     defaultNavigationOptions: {
//       header: null
//     }
//   }
// );
const LoginStacks = createSwitchNavigator({
  Login: { screen: LoginStack },
  Draw: { screen: DrawStack }
});
export default LoginStacks;
