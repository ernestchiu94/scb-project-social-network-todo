import { createStackNavigator } from 'react-navigation';
import { Posts, Comments } from '@screens';

const PostStack = createStackNavigator({
  posts: Posts,
  comments: Comments
}, {
  initialRouteName: 'posts',
  headerMode: 'none'
});

export default PostStack;
