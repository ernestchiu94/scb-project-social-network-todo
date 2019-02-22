import { Platform } from 'react-native';
import { COLOR } from './constants';
import { hasNotch } from './utils';

export const notchContainer = {
  ...Platform.select({
    ios: {
      marginBottom: hasNotch ? 0 : 15
    }
  })
};

export const shadow = {
  shadowColor: COLOR.BLACK,
  shadowRadius: 8,
  shadowOffset: { height: 7, width: 10 },
  shadowOpacity: 0.4
};
