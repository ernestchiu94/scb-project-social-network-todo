import { StyleSheet } from 'react-native';
import { whiteBackground, shadow } from '@styles/common';

const styles = StyleSheet.create({
  container: {
    ...whiteBackground
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
  }
});

export default styles;
