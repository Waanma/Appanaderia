import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../../constants/themes/colors';
import { Categories, Product, Products } from '../../screens';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.button,
        headerTitleStyle: {
          fontFamily: 'LibreBaskerville-Bold',
        },
      }}>
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: route.params.color,
          }
        })}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
