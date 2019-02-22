import { Dimensions, StyleSheet } from 'react-native';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');

const COLOR = {
  WHITE: '#FFFFFF',
  OFFWHITE: '#F6F6F7',
  LIGHTGREY: '#D0D4D6',
  GREY: '#8C8E9B',
  DARKGREY: '#3A4254',
  MATTEBLACK: '#20242E',
  OFFBLACK: '#141414',
  BLACK: '#000000',
  LIGHTGREEN: '#B5DDA4',
  GREEN: '#83AD64',
  DARKGREEN: '#2C5E33',
  LIGHTBLUE: '#6A91E1',
  BLUE: '#175490',
  DARKBLUE: '#0F084B',
  RED: '#B4423D',
  ORANGE: '#F96046',
  LIGHTORANGE: '#F79D65',
  YELLOW: '#F7B267',
  TRANSPARENT: {
    NONE: 'FF',
    LOW: 'CC',
    MEDIUM: '66',
    HIGH: '33',
    MAX: '00',
    HEX: 'transparent'
  }
}

const DIMENSION = {
  HEIGHT,
  WIDTH,
  HAIRLINE: StyleSheet.hairlineWidth
};

export { COLOR, DIMENSION };
