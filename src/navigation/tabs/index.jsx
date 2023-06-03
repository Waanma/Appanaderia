import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { useSelector } from 'react-redux';

import { COLORS } from '../../constants';
import CartNavigator from '../cart';
import OrdersNavigator from '../orders';
import ShopNavigator from '../shop';
const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
    const cart = useSelector((state) => state.cart.data);
    const animatedValue = useRef(new Animated.Value(1)).current;
    const tabIconAnimation = () => {
        Animated.timing(animatedValue, {
            toValue: 1.5,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.linear,
        }).start();
    };
    useEffect(() => {
        tabIconAnimation();
    }, [tabIconAnimation]);
    return (
        <BottomTab.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'LibreBaskerville-Bold',
                    fontSize: 14,
                },
                tabBarActiveTintColor: COLORS.button,
                tabBarInactiveBackgroundColor: COLORS.inactive,
            }}>
            <BottomTab.Screen
                name="ShopTab"
                component={ShopNavigator}
                options={{
                    tabBarLabel: 'Shop',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Animated.View style={{ opacity: animatedValue }}>
                            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
                        </Animated.View>
                    ),
                }}
            />
            <BottomTab.Screen
                name="OrdersTab"
                component={OrdersNavigator}
                options={{
                    tabBarLabel: 'Orders',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? 'file-tray' : 'file-tray-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="CartTab"
                component={CartNavigator}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused ? 'cart' : 'cart-outline'} size={size} color={color} />
                    ),
                    tabBarBadge: cart.length,
                    tabBarBadgeStyle: {
                        backgroundColor: "#62C370",
                        color: COLORS.black,
                        borderRadius: 10,
                        height: 18,
                        width: 16,
                        fontFamily: "LibreBaskerville-Bold",
                        fontSize: 12,
                    },
                }}
            />
        </BottomTab.Navigator>
    );
};

export default TabsNavigator;
