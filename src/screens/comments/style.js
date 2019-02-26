import { StyleSheet } from 'react-native';
import { whiteBackground, shadow } from "@styles/common";

const styles = StyleSheet.create({
  container: {
    ...whiteBackground
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: 15,
    flex: 1
  },
  commentContainer: {
    flex: 10,
    height: '100%',
    width: '100%'
  },
  spinnerContainer: {
    flex: 1,
    backgroundColor: 'red'
  },
  postContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  post: {
    ...shadow,
    height: 100
  },
  separator: {
    marginVertical: 15
  }
});

export default styles;
