import { StyleSheet } from 'react-native';
import { COLOR } from '@styles/constants';

const styles = StyleSheet.create({
  container: size => ({
    height: size * 0.85,
    width: size * 0.85,
    borderColor: COLOR.DARKGREY,
    borderRadius: size,
    borderWidth: size * 0.1,
    alignItems: 'center',
    justifyContent: 'center'
  }),
  image: size => ({
    height: size * 0.6,
    width: size * 0.6,
    borderRadius: size * 0.3
  }),
  icon: size => ({
    fontSize: size
  })
});

export default styles;
