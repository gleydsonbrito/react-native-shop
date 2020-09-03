import React from 'react';

import { View, StyleSheet } from 'react-native';

const LoadingScrenn = props => {
    return (
        <View style={styles.container}>
                {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white' 
    }
});

export default LoadingScrenn;