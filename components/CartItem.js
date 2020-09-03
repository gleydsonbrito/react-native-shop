import React, { useState } from 'react';
import { useSelector } from 'react-redux'

import { View, Text, StyleSheet, Image, } from 'react-native';
import TouchableComponent from '../components/TouchableComponent';
import { Ionicons, FontAwesome } from 'react-native-vector-icons';

const CartItem = props => {

    const [count, setCount] = useState(1);

    function increment() {
        setCount(current => current + 1);
    }

    function decrement() {
        if(!count > 0) return 
        setCount( current => current - 1);
    }

    return (
        <View style={styles.infos}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: props.imageUrl }} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text numberOfLines={3} style={styles.description}>{props.description}</Text>
                    <Text style={styles.price}>R$ {props.price}</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
                <View style={styles.addButtonContainer}>
                    <TouchableComponent style={styles.minus} onPress={decrement}>
                        <FontAwesome name='minus' size={20}/>
                    </TouchableComponent>
                    <View style={styles.count}>
                        <Text style={styles.qt}>{count}</Text>
                    </View>
                    <TouchableComponent style={styles.plus} onPress={increment}>
                        <FontAwesome name='plus' size={20} />
                    </TouchableComponent>
                </View>
                <TouchableComponent style={styles.trash} onPress={props.onPress}>
                    <Ionicons name='md-trash' size={30} color='#E74C3C' />
                </TouchableComponent>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    infos: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 20,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoContainer: {
        flex: 4,
        marginLeft: 10,
        marginVertical: 5,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 3,
    },
    description: {
        fontSize: 14,
        marginBottom: 3,
    },
    price: {
        fontSize: 14,
        marginBottom: 3,
        color: '#F24130',
    },
    addButtonContainer: {
        flexDirection: 'row',
        marginLeft: 20,
        borderRadius: 4,
        borderColor: '#D7DBDD',
        borderWidth: 1,
        height: 30,
        width: 150,
        overflow: 'hidden',
    },
    minus: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5E7E9',
    },
    count: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    plus: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5E7E9',
    },
    qt: {
        fontSize: 18,
    },
    trash:{
       marginRight: 30,
    }
});

export default CartItem;