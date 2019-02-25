import { createSwitchNavigator, createAppContainer } from 'react-navigation';
// import AppStack from './app';
import { Launch, Login } from '@screens';

const RootStack = createSwitchNavigator({
  launch: Launch,
  login: Login
  // app: AppStack
}, {
  initialRouteName: 'launch'
});

export default createAppContainer(RootStack);
