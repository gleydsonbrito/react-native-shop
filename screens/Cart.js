import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import StatusBar from './statusBarConfig/statusBarConfig';

import CartList from '../components/CartList';
import PayButton from '../components/PayButton';
import { setOrders } from '../store/actions/orders';
import { deleteCart } from '../store/actions/products';
import Order from '../model/Order';

import Color from '../constants/Colors';

function randonIdGenerator() {
    return Math.floor(Math.random() * 1000);
}

function dateFormat(date) {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}

const Cart = ({ navigation, route }) => {
    navigation.setOptions({ title: 'Your Cart' });

    let val = 0;

    const cartProducts = useSelector( state => state.products.cart);
    cartProducts.forEach(item => {
        val = val + parseInt(item.price);
    });

    const dispatch = useDispatch();

    const handleSetOrder = async () => {
        if (!val) return alert('You must add items in cart to pay');
        const order = new Order(
            randonIdGenerator(),
            val,
            dateFormat(new Date()),
            cartProducts
        )

        dispatch(setOrders(order));
        dispatch(deleteCart());
        alert('Pay Successfully, Thanks!');
        navigation.popToTop();
    }

    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.value}>Total price: R$ {val}</Text>
            <CartList data={cartProducts}/>
            <View style={styles.payButtonContainer}>
                <PayButton onPress={handleSetOrder} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 10,
        justifyContent: 'flex-start',
    },
    value: {
        alignSelf: 'flex-end',
        paddingVertical: 20,
        paddingRight: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.secondaryBlueColor,
    },
    payButtonContainer: {
        position: "absolute",
        bottom: 50,
        right: 20,
    },
});

export default Cart;