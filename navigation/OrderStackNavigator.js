import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import configHeaderOptions from '../navigation/configNavigations/headerBarConfig';
import Orders from '../screens/Orders';

const Stack = createStackNavigator();

export default function(){
    return (
        <Stack.Navigator screenOptions={configHeaderOptions}>
            <Stack.Screen name='Orders' component={Orders} />
        </Stack.Navigator>
    );
}
