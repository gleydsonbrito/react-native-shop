import React from 'react';

import { StatusBar, Platform } from 'react-native';

import Color from '../../constants/Colors';

export default function(){
    return <StatusBar 
    barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'}
    backgroundColor={Platform.OS === 'android' ? Color.mainBlueColor : ''} 
    />
}