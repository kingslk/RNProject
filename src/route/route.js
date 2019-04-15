import { createAppContainer } from 'react-navigation';
// import DetailStack from './DetailStack';
// import DrawStack from './DrawStack';
import LoginStack from './loginStack'
// const AppContainer = createAppContainer(DrawStack);
const AppContainer = createAppContainer(LoginStack);

export default AppContainer;
