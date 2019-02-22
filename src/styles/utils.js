import { Platform } from 'react-native';
import { DIMENSION } from './constants';

export const hasNotch = (Platform.OS === 'ios' && DIMENSION.HEIGHT >= 812);
