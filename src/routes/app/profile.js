import { createStackNavigator } from 'react-navigation';
import { Profile, Albums, Posts, Comments, Photos } from '@screens';

const ProfileStack = createStackNavigator({
  profile: Profile,
  myAlbums: Albums,
  myComments: Comments,
  myPhotos: Photos,
  myPosts: Posts
}, {
  initialRouteName: 'profile',
  headerMode: 'none'
});

export default ProfileStack;
