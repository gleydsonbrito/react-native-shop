import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';

import { FlatList } from 'react-native';

import CartItem from '../components/CartItem';
import {deleteItemCart} from '../store/actions/products';

const CartList = props => {
    const dispatch = useDispatch();

    const handleDeleteItemCart = id => {
        dispatch(deleteItemCart(id));
    }

    const renderItems = ({ item }) => {
        return <CartItem
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            price={item.price}
            onPress={() => handleDeleteItemCart(item.id)}
        />
    }

    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={props.data}
            renderItem={renderItems}
        />
    );
};

export default CartList;