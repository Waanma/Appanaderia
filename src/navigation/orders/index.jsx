import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../../constants/themes/colors';
import { Orders } from '../../screens';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Orders"
            screenOptions={{
                headerStyle: {
                    backroundColor: COLORS.primary,
                },
                headerTintColor: COLORS.button,
                headerTitleStyle: {
                    fontFamily: 'LibreBaskerville-Bold',
                },
            }}>
            <Stack.Screen name="Orders" component={Orders} />
        </Stack.Navigator>
    );
};

export default OrdersNavigator;
