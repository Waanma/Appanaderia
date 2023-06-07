import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.inactive,
  },
  content: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.inactive,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minHeight: 340,
  },
  title: {
    fontFamily: 'LibreBaskerville-Bold',
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    height: 45,
    borderBottomColor: COLORS.button,
    borderBottomWidth: 0.5,
    maxWidth: '90%',
    fontFamily: 'LibreBaskerville-Regular',
    marginBottom: 5,
  },
  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 8,
  },
  link: {
    paddingVertical: 5,
    width: '70%',
  },
  linkText: {
    fontFamily: 'LibreBaskerville-Regular',
    fontSize: 14,
    borderBottomColor: "#0582CA",
    borderBottomWidth: 0.4,
    color: '#0582CA',
    textAlign: 'center',
  },
  submitContainer: {
    paddingVertical: 2,
    width: '100%',
    padding: 20,
  },
});
