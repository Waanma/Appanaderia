import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  constainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontFamily: 'LibreBaskerville-Regular',
    paddingVertical: 5,
    color: COLORS.black,
  },
  subLabel: {
    fontSize: 12,
    fontFamily: 'LibreBaskerville-Regular',
    paddingVertical: 5,
    color: COLORS.black,
  },
});
