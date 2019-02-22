import { StyleSheet } from 'react-native';
import { COLOR, DIMENSION } from '@styles/constants';
import { shadow } from '@styles/common';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: `${COLOR.BLACK}${COLOR.TRANSPARENT.MEDIUM}`,
    marginHorizontal: '5%',
    borderRadius: 10,
    padding: '5%',
    alignItems: 'center'
  },
  textContainer: {
    flexDirection: 'row',
    paddingTop: '5%',
    flex: 1
  },
  button: {
    ...shadow,
    width: '100%',
    flex: 3
  },
  text: {
    ...shadow,
    fontSize: 12,
    color: COLOR.WHITE
  }
});

export default styles;
