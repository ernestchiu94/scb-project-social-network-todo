import { StyleSheet } from 'react-native';
import { COLOR } from '@styles/constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLOR.MATTEBLACK,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    maxHeight: 40
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLOR.OFFWHITE
  },
  disabled: {
    backgroundColor: COLOR.LIGHTGREY
  }
});

export default styles;
