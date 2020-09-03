import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { View, ScrollView, Text, StyleSheet, Dimensions, Image,} from 'react-native';
import CartIcon from '../components/CartIcon';
import StatusBar from './statusBarConfig/statusBarConfig';
import { setCart } from '../store/actions/products'

import Color from '../constants/Colors';

const Detail = ({ navigation, route }) => {
    const { id } = route.params
    const cart = useSelector( state => state.products.cart)
    const productList = useSelector( state => state.products.products);
    
    const product = productList.find(product => product.id === id);

    const dispatch = useDispatch();

    const handleNavigate = () => {
        dispatch(setCart(id, 1));
        navigation.navigate('Cart')
    };

    navigation.setOptions({ 
        title: product.title,
        headerRight: () => {
            return(<CartIcon 
            amount={cart.length > 0 ? cart.length : ''} 
            name={ cart.length > 0 ? 'shopping-cart' : 'add-shopping-cart'} 
            onPress={handleNavigate}
            haveItems={cart.length > 0 ? true : false}
            />
        );}
     });

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <StatusBar />
                <View style={styles.imageContainer}>
                    <Image style={styles.image}
                        source={{ uri: product.imageUrl }}
                    />
                </View>
                <View style={styles.infos}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>R$ {product.price} <Text style={{ fontSize: 16 }}>à vista</Text></Text>
                    <Text style={styles.installment}>Ou em 10x de {(product.price / 10).toFixed(2)}</Text>
                    <Text style={styles.descriptions}>Overview:</Text>
                    <Text style={styles.descriptions}>{product.description}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    imageContainer: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 5,
    },
    image: {
        width:  '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    infos: {
        alignSelf: 'flex-start',
        paddingLeft: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    installment: {
        fontSize: 18,
        paddingVertical: 5,
    },
    descriptions: {
        fontSize: 16,
        marginVertical: 5,
        paddingRight: 20,
        textAlign: 'justify'
    },
    iconContainter: {
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: Color.secondaryBlueColor,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.65,
        shadowRadius: 5,
        elevation: 6,
    }
});

export default Detail;