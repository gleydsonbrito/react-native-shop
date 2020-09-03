import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import ShopStackNavigator from '../navigation/ShopStackNavigator'
import OrderStackNavigator from '../navigation/OrderStackNavigator'
import ManageStackNavigator from '../navigation/ManageStackNavigator'
import CreateStaeckNavigator from '../navigation/CreateStackNavigator';

import { MaterialCommunityIcons, MaterialIcons } from 'react-native-vector-icons';

const Drawer = createDrawerNavigator();

export default function () {
    return (
        <Drawer.Navigator initialRouteName="Shop">
            <Drawer.Screen name='Shop' component={ShopStackNavigator} options={{
                drawerIcon: ({focused, color, size}) => <MaterialCommunityIcons name='shopping' size={size} color={color}/>
            }}/>
            <Drawer.Screen name='Orders' component={OrderStackNavigator} options={{
                drawerIcon: ({focused, color, size}) => <MaterialIcons name='business' size={size} color={color}/>
            }}/>
            <Drawer.Screen name='Manager' component={ManageStackNavigator} options={{
                drawerIcon: ({focused, color, size}) => <MaterialCommunityIcons name='folder-edit' size={size} color={color}/>
            }}/>
            <Drawer.Screen name='Create New Product' component={CreateStaeckNavigator} options={{
                drawerIcon: ({focused, color, size}) => <MaterialIcons name='create' size={size} color={color}/>
            }}/>
        </Drawer.Navigator>
    );
};