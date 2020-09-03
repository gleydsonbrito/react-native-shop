import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import configHeaderOptions from '../navigation/configNavigations/headerBarConfig';
import ManageProducts from '../screens/ManagerProducts'
import Edit from '../screens/Edit'
import CreateProduct from '../screens/CreateProduct';

const Stack = createStackNavigator();

export default function(){
    return (
        <Stack.Navigator screenOptions={configHeaderOptions}>
            <Stack.Screen name='Manage' component={ManageProducts} />
            <Stack.Screen name='Edit' component={Edit} />
        </Stack.Navigator>
    );
};