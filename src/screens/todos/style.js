import { StyleSheet } from 'react-native';
import { COLOR } from '@styles/constants';
import { whiteBackground, shadow } from '@styles/common';

const styles = StyleSheet.create({
  container: {
    ...whiteBackground
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15
  },
  listContainer: {
    alignItems: 'center',
    paddingBottom: 15
  },
  card: {
    ...shadow,
    justifyContent: 'center',
    marginVertical: 10
  },
  icon: {
    fontSize: 64,
    color: COLOR.DARKGREY
  },
  text: {
    color: COLOR.GREY
  }
});

export default styles;
