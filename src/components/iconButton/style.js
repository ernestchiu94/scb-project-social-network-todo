import { StyleSheet } from 'react-native';
import { COLOR, DIMENSION } from '@styles/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 45,
    maxWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  icon: {
    fontSize: 20,
    color: COLOR.GREY
  },
  text: {
    fontSize: 10,
    color: COLOR.GREY
  }
});

export default styles;
