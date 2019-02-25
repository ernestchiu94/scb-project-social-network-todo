import { StyleSheet } from 'react-native';
import { COLOR } from '@styles/constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: 15
  },
  button: {
    marginVertical: 15
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 15
  },
  headerIcon: {
    textAlign: 'center',
    color: COLOR.DARKGREY,
    fontSize: 40,
  },
  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLOR.DARKGREY
  },
  headerText: {
    textAlign: 'center',
    fontSize: 10,
    color: COLOR.GREY
  }
});

export default styles;
