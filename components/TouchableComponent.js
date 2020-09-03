import React from 'react';

import { TouchableOpacity, } from 'react-native';

const TouchableComponent = props => {
    return(
        <TouchableOpacity {...props}>{props.children}</TouchableOpacity>
    );
};

export default TouchableComponent;