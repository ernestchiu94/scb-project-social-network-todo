import { StyleSheet } from 'react-native';
import { whiteBackground, shadow } from '@styles/common';

const styles = StyleSheet.create({
  container: {
    ...whiteBackground
  },
  listContainer: {
    padding: 15
  },
  post: {
    ...shadow
  }
});

export default styles;
