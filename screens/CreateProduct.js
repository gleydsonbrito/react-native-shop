import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, Alert, } from 'react-native';
import StatusBar from './statusBarConfig/statusBarConfig';
import ToggleMenu from '../components/ToggleMenu';
import Color from '../constants/Colors';
import BoxContainer from '../components/BoxContainer';
import ButtonUpDate from '../components/ButtonUpDate';
import { createProduct } from '../store/actions/products';

const CreateProduct = ({ navigation, route }) => {
    navigation.setOptions({ title: 'New Product' });

    navigation.setOptions({
        headerLeft: () => {
            return (<ToggleMenu navigation={navigation} />);
        },
    })

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');

    const dispatch = useDispatch();

    const handleCreateProduct = () => {
        if (!title || !description || !imageUrl || !price) return alert('Fields can not be blank')

        const product = {
            title: title,
            price: price,
            description: description,
            imageUrl: imageUrl
        }

        dispatch(createProduct(product));
        cleanupForm();
        navigation.navigate('Shop');
        alert('Product Created')
    };

    const cleanupForm = () => {
        setTitle('')
        setPrice('');
        setDescription('');
        setImageUrl('');
    }

    return (
        <TouchableWithoutFeedback style={{ flex: 1, }} onPress={Keyboard.dismiss}>
            <ScrollView style={styles.container}>
                <StatusBar />
                <BoxContainer>
                    <Text style={styles.distance}>Product Name:</Text>
                    <TextInput
                        style={styles.text}
                        multiline={true}
                        onChangeText={text => setTitle(text)}
                        value={title}
                    />

                    <Text style={styles.distance}>Description:</Text>
                    <TextInput
                        style={styles.text}
                        multiline={true}
                        onChangeText={desc => setDescription(desc)}
                        value={description}
                    />

                    <Text style={styles.distance}>Image URL:</Text>
                    <TextInput
                        style={styles.text}
                        multiline={true}
                        onChangeText={img => setImageUrl(img)}
                        value={imageUrl}
                    />

                    <Text style={styles.distance}>Price:</Text>
                    <TextInput
                        style={styles.text}
                        keyboardType='decimal-pad'
                        onChangeText={price => setPrice(price)}
                        value={price}
                    />
                </BoxContainer>

                <View style={styles.buttonContainer}>
                    <ButtonUpDate name='Save' onPress={handleCreateProduct} />
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

export default CreateProduct;
