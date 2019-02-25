import { StyleSheet } from 'react-native';
import { COLOR } from '@styles/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 10,
    color: COLOR.GREY,
    textAlign: 'center',
    paddingVertical: 10
  }
});

export default styles;
