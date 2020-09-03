import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, } from 'react-native';
import StatusBar from './statusBarConfig/statusBarConfig';
import Color from '../constants/Colors';
import BoxContainer from '../components/BoxContainer';
import ButtonUpDate from '../components/ButtonUpDate';
import Product from '../model/Product';

import { updateProduct } from '../store/actions/products'

const Edit = ({ navigation, route }) => {
    navigation.setOptions({ title: 'Edit Product' })
    const { id } = route.params
    const products = useSelector(state => state.products.products);
    const product = products.find(product => product.id === id);

    const [pTitle, setpTitle] = useState(product.title);
    const [pDescriptions, setPDescriptions] = useState(product.description);
    const [pImage, setPImage] = useState(product.imgUrl);

    const dispatch = useDispatch();

    const handleUpdateProduct = () => {
        const updatedProduct = new Product(id, pTitle, product.price, pDescriptions, pImage)

        dispatch(updateProduct(updatedProduct));
        navigation.navigate('Manage')
        alert('Change saved')
    }

    return (

        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
            <ScrollView style={styles.container}>
                <StatusBar />
                <BoxContainer>
                        <Text style={styles.distance}>Product ID:</Text>
                        <Text style={{ fontSize: 16 }}>{product.id}</Text>

                        <Text style={styles.distance}>Product Name:</Text>
                        <TextInput
                            style={styles.text}
                            onChangeText={title => setpTitle(title)}
                            value={pTitle}
                        />

                        <Text style={styles.distance}>Description:</Text>
                        <TextInput
                            style={styles.text}
                            multiline
                            numberOfLines={10}
                            onChangeText={desc => setPDescriptions(desc)}
                            value={pDescriptions}
                        />

                        <Text style={styles.distance}>Image URL:</Text>
                        <TextInput
                            style={styles.text}
                            multiline
                            numberOfLines={10}
                            onChangeText={img => setPImage(img)}
                            value={pImage}
                        />

                        <Text style={styles.distance}>Price:</Text>
                        <Text style={styles.price}>R$ {product.price}</Text>
                </BoxContainer>

                <View style={styles.buttonContainer}>
                    <ButtonUpDate name='Update Product' onPress={handleUpdateProduct} />
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 20,
    },
    text: {
        fontSize: 18,
        borderBottomColor: '#D7DBDD',
        borderBottomWidth: 1,
        color: Color.textColor
    },
    distance: {
        marginTop: 20,
        fontWeight: 'bold',
        color: Color.secondaryBlueColor
    },
    price: {
        fontSize: 18,
        color: Color.textColor,
        fontWeight: 'bold'
    },
    buttonContainer: {
        marginTop: 20,
        paddingRight: 30,
        width: '100%',
        alignItems: 'flex-end',
    },
})

export default Edit;
