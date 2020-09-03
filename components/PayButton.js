import React from 'react';

import { Text, StyleSheet } from 'react-native';
import TouchableComponent from '../components/TouchableComponent';
import { MaterialIcons } from 'react-native-vector-icons';

import Color from '../constants/Colors';

const PayButton = props => { 
    return(
        <TouchableComponent style={styles.container} onPress={props.onPress}>
            {/* <MaterialIcons name='payment' size={40} color='#FFF'/> */}
            <Text style={{color: '#FFF', fontSize: 18, fontWeight: 'bold'}}>Pay now</Text>
        </TouchableComponent>
    ); 
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: Color.secondaryBlueColor,
        borderRadius: 10,
    }
});

export default PayButton;