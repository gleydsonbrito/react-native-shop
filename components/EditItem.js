import React from 'react';

import { View, StyleSheet, Image, Button, Text } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons'
import Color from '../constants/Colors';

const EditItem = props => {
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Text style={styles.price}>{props.name}</Text>
                <Image style={styles.img} source={{ uri: props.imageUrl }} />
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.alignement}>
                    <Button title='Edit' onPress={() => props.navigation.navigate('Edit', {id: props.id})}/>
                </View>
                <View style={styles.alignement}>
                    <MaterialIcons name='attach-money' size={25} color={Color.secondaryBlueColor}/>
                    <Text style={styles.price}>{props.price}</Text>
                </View>
                <View style={styles.alignement}>
                    <Button title='Delete' color='red' onPress={props.onDelete}/>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
        alignItems: 'center',
        paddingTop: 10,
    },
    imgContainer: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 90,
        height: 190,
        resizeMode: 'contain'
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '80%',
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
        borderBottomColor: '#E5E7E9',
        borderBottomWidth: 1.5,
    },
    alignement: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    price:{
        marginTop: 3,
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.textColor
    }
});

export default EditItem;