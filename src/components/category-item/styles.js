import { StyleSheet } from 'react-native';
import {COLORS} from '../../constants/themes/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 180,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 13,
  },
  containerTouchable: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontFamily: "LibreBaskerville-Italic",
    color: COLORS.black,
  },
});
