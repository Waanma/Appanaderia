import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../../constants';
import { Cart } from '../../screens';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={{
                headerStyle: {
                    backroundColor: COLORS.primary,
                },
                headerTintColor: COLORS.button,
                headerTitleStyle: {
                    fontFamily: 'LibreBaskerville-Bold',
                },
            }}>
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    );
};

export default CartNavigator;
