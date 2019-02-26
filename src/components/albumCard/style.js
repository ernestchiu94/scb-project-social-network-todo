import { StyleSheet } from 'react-native';
import { COLOR } from '@styles/constants';
import { shadow } from '@styles/common';

const styles = StyleSheet.create({
  container: {
    ...shadow,
    minHeight: 200,
    maxHeight: 200,
    minWidth: 150,
    maxWidth: 150,
    backgroundColor: COLOR.WHITE
  },
  descContainer: {
    flexDirection: 'row',
    minHeight: 50,
    maxHeight: 50
  },
  thumbnail: {
    height: 150,
    width: 150,
  },
  profile: {
    borderRadius: 12.5,
    borderWidth: 2,
    borderColor: COLOR.GREY,
    maxHeight: 25,
    maxWidth: 25,
    minHeight: 25,
    minWidth: 25,
  },
  text: {
    textAlign: 'center',
    color: COLOR.DARKGREY,
    fontSize: 10
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 50,
    maxWidth: 50
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    maxWidth: 100,
    padding: 10
  },
  align: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
