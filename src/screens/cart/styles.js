import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    backgroundColor: COLORS.backround,
  },
  footerContainer: {
    backgroundColor: COLORS.inactive,
    borderTopColor: COLORS.inactive,
    borderTopWidth: 4,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonDisabled: {
    backgroundColor: COLORS.inactive2,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.19,
    shadowRadius: 0.65,
    elevation: 1,
  },
  buttonConfirm: {
    backgroundColor: '#62C370',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.19,
    shadowRadius: 0.65,
    elevation: 1,
  },
  buttonConfirmText: {
    color: COLORS.black,
    fontFamily: 'LibreBaskerville-Regular',
    fontSize: 14,
  },
  totalContainer: {
    color: COLORS.primary,
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText: {
    color: COLORS.black,
    fontFamily: 'LibreBaskerville-Regular',
    fontSize: 14,
  },
  totalPrice: {
    color: COLORS.black,
    fontFamily: 'LibreBaskerville-Bold',
    fontSize: 15,
  },
});
