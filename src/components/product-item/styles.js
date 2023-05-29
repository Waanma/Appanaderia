import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    height: 120,
  },
  containerTouchable: {
    flex: 1,
    backgroundColor: COLORS.secondary,
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
    fontSize: 20,
    fontFamily: 'LibreBaskerville-Italic',
    margin: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    fontFamily: 'LibreBaskerville-Bold',
    margin: 6,
    textAlign: 'center',
  },
  weight: {
    fontSize: 14,
    fontFamily: 'LibreBaskerville-Bold',
    margin: 6,
    textAlign: 'center',
  },
});
