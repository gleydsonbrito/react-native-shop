import React from 'react';

import { Text, StyleSheet, } from 'react-native';
import TouchableComponent from '../components/TouchableComponent';

import Color from '../constants/Colors';


const ButtonUpDate = props => {
    return (
        <TouchableComponent activeOpacity={0.65} style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.name}</Text>
        </TouchableComponent>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: Color.secondaryBlueColor,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    text: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    }
    });

export default ButtonUpDate;