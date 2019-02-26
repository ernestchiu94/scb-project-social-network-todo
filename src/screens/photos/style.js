import { StyleSheet } from 'react-native';
import { COLOR } from '@styles/constants';
import { whiteBackground } from '@styles/common';

const styles = StyleSheet.create({
  container: {
    ...whiteBackground,
    flex: 1
  },
  listContainer: {
    padding: 15
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10
  },
  image: {
    minHeight: 100,
    maxHeight: 100,
    minWidth: 100,
    maxWidth: 100
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  largeImage: {
    minHeight: 250,
    maxHeight: 250,
    minWidth: 250,
    maxWidth: 250,
  },
  modalText: {
    color: COLOR.WHITE,
    textAlign: 'center',
    padding: 20
  }
});

export default styles;
