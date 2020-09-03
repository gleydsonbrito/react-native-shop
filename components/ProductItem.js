import React from 'react';

import { MaterialIcons } from 'react-native-vector-icons';
import TouchableComponent from '../components/TouchableComponent'
import Color from '../constants/Colors';

import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

const ProductItem = props => {
    return (
        <View style={styles.container}>
            <TouchableComponent activeOpacity={0.65} onPress={props.goDetail}>
                <View style={styles.imageContainer}>
                    <Image style={styles.img}
                        source={{ uri: props.imageUrl }}
                    />
                    <Text style={styles.title}>{props.title}</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>R$ {props.price}</Text>
                        <Text style={styles.info}>à vista</Text>
                    </View>
                    <Text style={styles.installment}>10x de R$ {props.installmentValue.toFixed(2)}</Text>
                </View>
            </TouchableComponent>
            <View style={styles.iconContainer}>
                <TouchableComponent activeOpacity={0.65} onPress={props.goDetail}>
                    <MaterialIcons name='pageview' size={40} color={Color.secondaryBlueColor} />
                </TouchableComponent>
                <TouchableComponent activeOpacity={0.65} onPress={props.goCart}>
                    <MaterialIcons name='add-shopping-cart' size={40} color={Color.secondaryBlueColor} />
                </TouchableComponent>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 7,
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    imageContainer: {
        padding: 3,
        marginBottom: 10,
        justifyContent: 'flex-start'
    },
    img: {
        width: 150,
        height: 200,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 5,
        color: Color.textColor,
    },
    description: {
        marginVertical: 5,
        color: Color.textColor,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'flex-end',
        marginVertical: 5,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.textColor,
    },
    info: {
        fontSize: 14,
        marginLeft: 10,
        color: Color.textColor,
    },
    installment: {
        fontSize: 16,
        color: Color.textColor,
    },
    iconContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 60,
    },
    
});

export default ProductItem;