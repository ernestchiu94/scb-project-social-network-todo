import { StyleSheet } from 'react-native';
import { COLOR } from '@styles/constants';
import { whiteBackground } from '@styles/common';

const styles = StyleSheet.create({
  container: {
    ...whiteBackground
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'red'
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    maxHeight: 50
  },
  logoutIcon: {
    fontSize: 30,
    textAlign: 'right',
    paddingVertical: 15,
    paddingHorizontal: 15,
    color: COLOR.DARKGREY
  }
});

export default styles;
