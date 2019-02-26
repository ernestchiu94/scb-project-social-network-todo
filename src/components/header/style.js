import { StyleSheet } from 'react-native';
import { COLOR, DIMENSION } from '@styles/constants';
import { hasNotch } from "@styles/utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: hasNotch ? 100 : 50,
    maxHeight: hasNotch ? 100 : 50,
    backgroundColor: COLOR.WHITE,
    borderBottomWidth: DIMENSION.HAIRLINE,
    borderBottomColor: COLOR.GREY,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    flex: 1,
    fontSize: 30,
    color: COLOR.DARKGREY,
    position: 'absolute',
    right: 15,
    bottom: 15
  }
});

export default styles;
