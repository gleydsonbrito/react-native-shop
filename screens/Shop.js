import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import StatusBar from './statusBarConfig/statusBarConfig';
import ToggleMenu from '../components/ToggleMenu';
import CartIcon from '../components/CartIcon';
import LoadingScrenn from '../screens/LoadingScreen';
import Colors from '../constants/Colors';

import ProductList from '../components/ProductList';
import { fetchProducts } from '../store/actions/products';

const Shop = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);

    const products = useSelector(state => state.products.products);
    const cart = useSelector(state => state.products.cart)

    const dispatch = useDispatch();
    
    const loadScreen = async () => {
        setIsLoading(true);
        await dispatch(fetchProducts());
        setIsLoading(false);
    };

    useEffect( () => {
        const reload = navigation.addListener('focus', loadScreen);
        return reload;
    },[navigation, dispatch]);

    const handleNavigate = () => {
        navigation.navigate('Cart');
    }

    navigation.setOptions({
        headerLeft: () => {
            return (<ToggleMenu navigation={navigation} />);
        },
        headerRight: () => {
            return (<CartIcon
                amount={cart.length > 0 ? cart.length : ''}
                name={cart.length > 0 ? 'shopping-cart' : 'add-shopping-cart'}
                onPress={handleNavigate}
                haveItems={cart.length > 0 ? true : false}
            />)
        }
    });

    if (isLoading) {
        return <LoadingScrenn>
            <ActivityIndicator size='large' color={Colors.mainBlueColor} />
        </LoadingScrenn>
    }
    return (
        <View style={styles.container}>
            <StatusBar />
            <ProductList 
            onRefresh={loadScreen}
            refreshing={isLoading}
            data={products} 
            navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default Shop;