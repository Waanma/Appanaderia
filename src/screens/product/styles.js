import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    color: 'white',
  },
  title: {
    fontSize: 20,
    fontFamily: 'LibreBaskerville-Bold',
  },
  image: {
    width: '90%',
    height: 250,
    borderRadius: 12,
    margin: 20,
  },
  name: {
    fontFamily: 'LibreBaskerville-Bold',
    margin: 5,
  },
  description: {
    fontFamily: 'LibreBaskerville-Regular',
    margin: 5,
  },
  price: {
    fontFamily: 'LibreBaskerville-Regular',
    margin: 5,
    marginBottom: 40,
  },
  weight: {
    fontFamily: 'LibreBaskerville-Regular',
    marginTop: 22,
  },
  add: {
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
    paddingVertical: 8,
    paddingHorizontal: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.19,
    shadowRadius: 1.65,
    elevation: 7,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
