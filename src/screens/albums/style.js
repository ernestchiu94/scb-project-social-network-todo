import { StyleSheet } from 'react-native';
import { whiteBackground } from '@styles/common';

const styles = StyleSheet.create({
  container: {
    ...whiteBackground
  },
  card: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listContainer: {
    paddingBottom: 15
  }
});

export default styles;
