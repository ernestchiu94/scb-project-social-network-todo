import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AppStack from './app';
import { Launch } from '@screens';

const RootStack = createSwitchNavigator({
  launch: Launch,
  app: AppStack
}, {
  initialRouteName: 'launch'
});

export default createAppContainer(RootStack);
