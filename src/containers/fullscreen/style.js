import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: (centerVertical, centerHorizontal) => ({
    alignItems: centerHorizontal && 'center',
    flex: 1,
    justifyContent: centerVertical && 'center'
  })
});

export default styles;
