import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import i18n from '@i18n';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProfileIcon } from '@components';
import AlbumStack from './album';
import PostStack from './post';
import ProfileStack from './profile';
import { Todos } from '@screens';
import { COLOR } from '@styles/constants';
import styles from './style';

const AppStack = createBottomTabNavigator({
  todos: {
    screen: Todos,
    navigationOptions: {
      title: i18n.t('screen:todos:title'),
      tabBarIcon: ({ tintColor }) => <Icon name="format-list-checks" style={styles.icon(tintColor)} />
    }
  },
  posts: {
    screen: PostStack,
    navigationOptions: {
      title: i18n.t('screen:posts:title'),
      tabBarIcon: ({ tintColor }) => <Icon name="note-outline" style={styles.icon(tintColor)} />
    }
  },
  albums: {
    screen: AlbumStack,
    navigationOptions: {
      title: i18n.t('screen:albums:title'),
      tabBarIcon: ({ tintColor }) => <Icon name="animation-outline" style={styles.icon(tintColor)} />
    }
  },
  profile: {
    screen: ProfileStack,
    navigationOptions: {
      title: i18n.t('screen:profile:title'),
      tabBarIcon: ({ tintColor }) => <ProfileIcon size={20} style={styles.profileIcon(tintColor)} />
    }
  }
}, {
  initialRouteName: 'todos',
  tabBarOptions: {
    activeTintColor: COLOR.OFFBLACK,
    inactiveTintColor: COLOR.GREY,
    style: styles.tabBar
  }
});

export default AppStack;
