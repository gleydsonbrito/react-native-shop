import React from 'react';

import { MaterialIcons } from 'react-native-vector-icons';
import TouchableComponent from '../components/TouchableComponent';

import Color from '../constants/Colors'
import { Platform, Text, StyleSheet, View } from 'react-native';

const CartIcon = props => {
    return (
        <TouchableComponent
            style={{ paddingRight: 10, }}
            activeOpacity={0.65}
            onPress={props.onPress}>
            <View style={styles.cartContainer}>
                <MaterialIcons
                    name={props.name}
                    size={26}
                    color={Platform.OS === 'ios' ? Color.secondaryBlueColor : '#FFF'} />
                {props.haveItems && <View style={styles.cicleAmount}>
                    <Text style={styles.text}>{props.amount}</Text>
                </View>}
            </View>
        </TouchableComponent>
    );
};

const styles = StyleSheet.create({
    cartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        zIndex: 1,
        fontSize: 12,
        fontWeight: 'bold',
        color: Platform.OS === 'android' ? Color.secondaryBlueColor : '#FFF',
    },
    cicleAmount: {
        marginBottom: 10,
        width: 16,
        height: 16,
        borderRadius: 8,
        marginLeft: -10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Platform.OS === 'ios' ? Color.secondaryBlueColor : '#FFF'
    },
});

export default CartIcon;