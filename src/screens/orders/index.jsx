import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { styles } from './styles';
import OrderItem from '../../components/order-item';
import { ORDERS } from '../../constants';

const Orders = () => {
    const keyExtractor = (item) => item.id.toString();
    const onRemove = (id) => {
        console.warn(id);
    };
    const renderItem = ({ item }) => <OrderItem item={item} onRemove={onRemove} />;
    return (
        <View style={styles.container}>
            <FlatList data={ORDERS} keyExtractor={(item) => item.id} renderItem={renderItem} />
        </View>
    );
};

export default Orders;
