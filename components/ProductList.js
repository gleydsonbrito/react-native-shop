import React from 'react';
import { useDispatch } from 'react-redux'
import { FlatList, ToastAndroid} from 'react-native';
import Toast from 'react-native-tiny-toast'

import ProductItem from '../components/ProductItem';
import {setCart} from '../store/actions/products';

const ProductList = props => {
    const dispatch = useDispatch();

    const handleSetCart = id => {
        console.log(id);
        dispatch(setCart(id));
        if(Platform.OS === 'android'){
            ToastAndroid.showWithGravity('Added to cart', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        }else{
            Toast.showSuccess('Added to cart')
        }
    };

    const renderItems = ({item}) =>{   
        return (<ProductItem 
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            installmentValue={item.price/10}
            goDetail={ () => props.navigation.navigate('Detail', {id: item.id })}
            goCart={ () => handleSetCart(item.id)}
        />);
    }

    return(
        <FlatList 
            onRefresh={props.onRefresh}
            refreshing={props.refreshing}
            keyExtractor={ item => item.id }
            data={props.data}
            renderItem={renderItems}
        />
    );
};

export default ProductList;