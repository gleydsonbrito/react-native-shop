import React from 'react';

import { View , StyleSheet } from 'react-native';

const BoxContainer = props => {
    return(
        <View style={styles.dataContainer}>
          {props.children}  
        </View>
    );
};

const styles = StyleSheet.create({
    dataContainer: {
        backgroundColor: '#FFF',
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingBottom: 20,
        marginHorizontal: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.26,
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 10,
        
    },
});

export default BoxContainer;