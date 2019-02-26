import { StyleSheet } from 'react-native';
import { COLOR, DIMENSION } from '@styles/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center'
  },
  icon: {
    fontSize: 20,
    color: COLOR.DARKGREY,
    textAlign: 'center',
  },
  text: {
    flex: 12,
    textAlign: 'center',
    color: COLOR.GREY
  },
  separator: {
    width: DIMENSION.HAIRLINE,
    backgroundColor: COLOR.DARKGREY,
    height: '50%',
    marginLeft: 30,
    marginRight: 15
  }
});

export default styles;
