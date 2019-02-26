import { StyleSheet } from 'react-native';
import { COLOR, DIMENSION } from '@styles/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10
  },
  separator: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    maxWidth: DIMENSION.HAIRLINE,
    backgroundColor: COLOR.DARKGREY
  },
  textContainer: {
    flex: 8,
  },
  title: {
    fontSize: 10,
    color: COLOR.DARKGREY
  },
  desc: {
    fontSize: 9,
    color: COLOR.GREY
  }
});

export default styles;
