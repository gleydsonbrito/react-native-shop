import React from 'react';

import { Platform } from 'react-native';
import Color from '../../constants/Colors'

export default {
    headerStyle:{
        backgroundColor: Platform.OS === 'android' ? Color.secondaryBlueColor : '#FFF'
    },
    headerTintColor: Platform.OS === 'android' ? '#FFF' : Color.mainBlueColor,
    headerTitleStyle:{
        fontWeight: 'bold',
        fontSize: 20,
    }
}