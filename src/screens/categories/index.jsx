import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import CategoryItem from '../../components/category-item';
import { selectCategory } from '../../store/actions';

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);
  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
      name: item.name,
      color: item.color,
    });
  };

  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;

  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleHeader}>Panadería Paaaaa</Text>
      </View>
      <FlatList data={categories} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default Categories;
