import { StyleSheet } from 'react-native';

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
  description:{
    fontFamily: 'LibreBaskerville-Regular',
    margin: 5,
  },
  price: {
    fontFamily: 'LibreBaskerville-Regular',
    margin: 11,
  },
  weight: {
    fontFamily: 'LibreBaskerville-Regular',
    margin: 11,
  },
});
