import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StyleSheet, FlatList, View, Alert } from 'react-native';
import StatusBar from '../screens/statusBarConfig/statusBarConfig';
import EditItem from '../components/EditItem';

import { deleteProduct } from '../store/actions/products'

const EditList = props => {
    const productList = useSelector(state => state.products.products);

    const dispatch = useDispatch();

        const handleOnDeleteProduct = (id) => {
            Alert.alert('Delete','Do you realy delete this item?', [
                {text: 'No', style: 'cancel'},
                {text: 'Yes', style: 'destructive', onPress: () => {
                    dispatch(deleteProduct(id));
                }}
            ])           
        };

    const renderItems = ({ item }) => {
        return (
            <EditItem 
                imageUrl={item.imageUrl}
                price={item.price}
                navigation={props.navigation}
                name={item.title}
                id={item.id}
                onDelete={ () => handleOnDeleteProduct(item.id)}
            />
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <FlatList
                keyExtractor={(item) => item.id}
                data={productList}
                renderItem={renderItems}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default EditList;