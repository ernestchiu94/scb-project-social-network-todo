import { Dimensions, StyleSheet } from 'react-native';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');

const COLOR = {
  WHITE: '#FFFFFF',
  OFFWHITE: '#FAFAFB',
  LIGHTGREY: '#D0D4D6',
  GREY: '#B1B4B5',
  DARKGREY: '#5D6473',
  MATTEBLACK: '#12141A',
  OFFBLACK: '#0A0A0A',
  BLACK: '#000000',
  LIGHTGREEN: '#CFE9C5',
  GREEN: '#8CBF59',
  DARKGREEN: '#18341C',
  LIGHTBLUE: '#ADC3EE',
  BLUE: '#175490',
  DARKBLUE: '#0F084B',
  RED: '#BA534E',
  ORANGE: '#FA8B78',
  LIGHTORANGE: '#F9B78F',
  YELLOW: '#FFD9B1',
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
