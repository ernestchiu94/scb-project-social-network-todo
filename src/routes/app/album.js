import { createStackNavigator } from 'react-navigation';
import { Albums, Photos } from '@screens';

const AlbumStack = createStackNavigator({
  albums: Albums,
  photos: Photos
}, {
  initialRouteName: 'albums',
  headerMode: 'none'
});

export default AlbumStack;
