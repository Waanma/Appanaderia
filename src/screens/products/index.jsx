import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Button
        title="Go to product"
        onPress={() => navigation.navigate('Product')}
        color="#6E355E"
      />
    </View>
  );
};

export default Products;
