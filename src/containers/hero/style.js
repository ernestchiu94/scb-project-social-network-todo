import { StyleSheet } from 'react-native';
import { notchContainer } from '../../styles/common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  banner: {
    flex: 2
  },
  content: {
    ...notchContainer,
    flex: 1
  }
});

export default styles;
