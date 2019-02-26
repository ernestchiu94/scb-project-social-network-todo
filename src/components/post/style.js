import { StyleSheet } from 'react-native';
import { COLOR, DIMENSION } from '@styles/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 5,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: DIMENSION.HAIRLINE,
    borderColor: COLOR.OFFWHITE,
    backgroundColor: COLOR.WHITE,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15
  },
  textContainer: {
    flex: 8,
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  profile: {
    flex: 1,
    minHeight: 30,
    maxHeight: 30,
    minWidth: 30,
    maxWidth: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: COLOR.GREY,
  },
  title: {
    color: COLOR.DARKGREY,
    flex: 1,
  },
  desc: {
    color: COLOR.GREY,
    fontSize: 10,
    flex: 1,
  },
  icon: {
    fontSize: 20,
    color: COLOR.GREY,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
