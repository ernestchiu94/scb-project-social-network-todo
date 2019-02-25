import { Platform, StyleSheet } from 'react-native';
import { COLOR, DIMENSION } from '@styles/constants';

const style = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${COLOR.LIGHTGREY}${COLOR.TRANSPARENT.HIGH}`,
    paddingHorizontal: '5%',
    maxHeight: 50,
    borderRadius: 50,
    marginVertical: 10
  },
  textInput: {
    ...Platform.select({
      ios: {

      },
      android: {

      }
    }),
    padding: 10,
    marginVertical: 5,
    width: '100%',
    color: COLOR.DARKGREY
  },
  highlight: {
    backgroundColor: `${COLOR.LIGHTGREY}${COLOR.TRANSPARENT.MEDIUM}`
  },
  icon: {
    color: COLOR.DARKGREY
  },
  iconHighlight: {
    color: COLOR.LIGHTGREY
  },
  error: {
    backgroundColor: `${COLOR.RED}${COLOR.TRANSPARENT.MEDIUM}`
  },
  textError: {
    color: COLOR.OFFWHITE
  },
  errorDescription: {
    textAlign: 'center',
    color: COLOR.RED,
    fontSize: 10
  }
});

export default style
