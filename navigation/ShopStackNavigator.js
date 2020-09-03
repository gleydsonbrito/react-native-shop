import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import configHeaderOptions from '../navigation/configNavigations/headerBarConfig';

import Shop from '../screens/Shop';
import Detail from '../screens/Detail';
import Cart from '../screens/Cart';

const Stack = createStackNavigator();

export default function(){
    return (
        <Stack.Navigator screenOptions={configHeaderOptions}>
            <Stack.Screen name='Shop' component={Shop} />
            <Stack.Screen name='Detail' component={Detail} />
            <Stack.Screen name='Cart' component={Cart} />
        </Stack.Navigator>
    );
};