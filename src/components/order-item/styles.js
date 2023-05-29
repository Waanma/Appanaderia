import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
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
  headerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 16,
    color: COLORS.black,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {},
  total: {
    fontSize: 12,
    color: COLORS.black,
  },
});
