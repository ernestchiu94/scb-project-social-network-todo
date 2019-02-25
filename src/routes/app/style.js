import { StyleSheet, Platform } from 'react-native';
import { COLOR } from '@styles/constants';

const styles = StyleSheet.create({
  icon: tintColor => ({
    fontSize: 20,
    tintColor,
    color: tintColor
  }),
  profileIcon: tintColor => ({
    borderColor: tintColor,
    color: tintColor,
  }),
  tabBar: {
    ...Platform.select({
      ios: {
        borderTopColor: COLOR.TRANSPARENT.HEX,
        backgroundColor: COLOR.OFFWHITE
      }
    })
  }
});

export default styles;
