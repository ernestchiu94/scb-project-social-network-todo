import { StyleSheet } from 'react-native';
import { COLOR, DIMENSION } from '@styles/constants';
import { whiteBackground } from '@styles/common';

const styles = StyleSheet.create({
  container: {
    ...whiteBackground
  },
  contentContainer: {
    paddingTop: 15,
    flex: 1,
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    width: '80%'
  },
  iconContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10
  },
  descText: {
    color: COLOR.GREY
  },
  separator: {
    marginVertical: 15,
    width: '90%',
    backgroundColor: COLOR.DARKGREY
  },
  field: (numberOfLines = 1) => ({
    flex: 1,
    height: numberOfLines > 1 ? 80 : 40,
    maxHeight: numberOfLines > 1 ? 80 : 40,
    width: '80%',
  })
});

export default styles;
