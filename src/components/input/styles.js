import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomColor: COLORS.button,
    borderBottomWidth: 0.5,
    maxWidth: '90%',
    fontFamily: 'LibreBaskerville-Regular',
    fontSize: 14,
    marginBottom: 5,
    color: COLORS.black,
  },
  errorContainer: {
    flex: 1,
    marginVertical: 1,
  },
  errorMessage: {
    fontFamily: 'LibreBaskerville-Regular',
    fontSize: 12,
    color: COLORS.delete,
    paddingVertical: 5,
  },
});
