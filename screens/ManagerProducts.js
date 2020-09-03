import React from 'react';

import { View, StyleSheet, } from 'react-native';
import EditList from '../components/EditList';
import StatusBar from './statusBarConfig/statusBarConfig';
import ToggleMenu from '../components/ToggleMenu';

const ManagerProducts = ({ navigation }) => {
    navigation.setOptions({
        title: 'All Products',
        headerLeft: () => {
            return (
            <ToggleMenu navigation={navigation}/>
        );
        }
    })

    return (
        <View style={styles.container}>
            <StatusBar />
            <EditList navigation={navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    }
});

export default ManagerProducts;