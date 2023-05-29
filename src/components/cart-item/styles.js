import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: COLORS.primary2,
    margin: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerContainer: {},
  header: {
    fontSize: 16,
    fontFamily: 'LibreBaskerville-Bold',
    color: COLORS.black,
    marginBottom: 5,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  quantity: {
    fontSize: 14,
    fontFamily: 'LibreBaskerville-Regular',
    color: COLORS.black,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontFamily: 'LibreBaskerville-Bold',
    color: COLORS.black,
    marginBottom: 5,
  },
});
