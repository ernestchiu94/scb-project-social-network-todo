import { StyleSheet } from 'react-native';
import { COLOR, DIMENSION } from '@styles/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${COLOR.BLACK}${COLOR.TRANSPARENT.LOW}`
  },
  content: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 7,
    padding: 25,
    width: '90%'
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: DIMENSION.WIDTH
  }
});

export default styles;
