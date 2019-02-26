import { StyleSheet } from 'react-native';
import { COLOR, DIMENSION } from '@styles/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: DIMENSION.WIDTH * 0.9,
    height: 80,
    alignItems: 'center'
  },
  checkContainer: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    height: 80
  },
  textContainer: {
    flex: 4,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderLeftColor: COLOR.GREY,
    borderLeftWidth: DIMENSION.HAIRLINE,
    backgroundColor: `${COLOR.WHITE}${COLOR.TRANSPARENT.LOW}`,
    justifyContent: 'center',
    height: 80
  },
  icon: completed => ({
    fontSize: 20,
    color: completed ? COLOR.GREEN : COLOR.GREY,
    textAlign: 'center'
  }),
  text: {
    fontSize: 14,
    marginHorizontal: 15,
    color: COLOR.DARKGREY,
    textAlign: 'left'
  }
});

export default styles;
