import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import configHeaderOptions from '../navigation/configNavigations/headerBarConfig';
import CreateProduct from '../screens/CreateProduct';

const Stack = createStackNavigator();

export default function(){
    return (
        <Stack.Navigator screenOptions={configHeaderOptions}>
            <Stack.Screen name='Create' component={CreateProduct} />
        </Stack.Navigator>
    );
};