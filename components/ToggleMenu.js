import React from 'react';

import { MaterialIcons } from 'react-native-vector-icons';
import { Platform } from 'react-native';
import TouchableComponent from '../components/TouchableComponent';

import Color from '../constants/Colors';

const ToggleMenu = props => {
    return (
        <TouchableComponent style={{paddingLeft: 10,}} onPress={() => props.navigation.toggleDrawer()}>
            <MaterialIcons
                name='menu'
                size={25}
                color={Platform.OS === 'ios' ? Color.secondaryBlueColor : '#FFF'}
            />
        </TouchableComponent>

    );
};

export default ToggleMenu;