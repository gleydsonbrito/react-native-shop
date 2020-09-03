import React from 'react';

import { View, StyleSheet, } from 'react-native';
import StatusBar from './statusBarConfig/statusBarConfig';
import ToggleMenu from '../components/ToggleMenu';
import ColapsableOrder from '../components/ColapsableOrder';


const Orders = ({ navigation }) => {
    navigation.setOptions({
        headerLeft: () => {
            return (
                <ToggleMenu navigation={navigation} />
            );
        }
    });

    return (
        <View style={styles.container}>
            <StatusBar />
            <ColapsableOrder />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Orders;