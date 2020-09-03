import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { MaterialCommunityIcons } from 'react-native-vector-icons'

import Color from '../constants/Colors';

const ColapsableOrder = () => {
    const [activeSections, setActiveSections] = useState([]);

    const SECTIONS = useSelector(state => state.orders.orders);
    const _renderHeader = section => {
        return (
            <View style={styles.header}>
                <Text style={{ fontSize: 12, marginLeft: 10, color: '#FFF' }}>Pedido: {section.id}</Text>
                <View style={styles.headerContent}>
                    <Text style={styles.headerTitle}>R$ {section.totalPrice.toFixed(2)}</Text>
                    <Text style={styles.headerTitle}>{section.date}</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 10, }}>
                    <MaterialCommunityIcons name='chevron-double-down' size={25} color='#FFF' />
                    <Text style={{ fontSize: 12, color: '#FFF' }}>more</Text>
                </View>
            </View>
        );
    };

    const _renderContent = section => {
        const renderItem = (item) => {
            return (
                <View key={item.id} style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                    <Text style={styles.contentTitle}>{item.title}</Text>
                    <Text style={styles.contentTitle}>R$ {item.price}</Text>
                </View>
            );
        }
        return (
            <View style={styles.content}>
                {section.products.map(item => renderItem(item))}
            </View>
        );
    };

    const _updateSections = activeSections => {
        setActiveSections(activeSections);
    }
    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1, }}>
                <Accordion
                    sections={SECTIONS}
                    activeSections={activeSections}
                    renderHeader={_renderHeader}
                    renderContent={_renderContent}
                    onChange={_updateSections}
                    underlayColor='#FFF'
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        width: Dimensions.get('window').width * 0.95,
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 3,
        marginTop: 10,
        marginHorizontal: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: Color.secondaryBlueColor,
        overflow: 'hidden'
    },
    headerTitle: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    content: {
        width: Dimensions.get('window').width * 0.95,
        alignSelf: 'center',
        borderColor: Color.textColor,
        borderWidth: 1,
        borderStyle: 'dashed'
    },
    contentText: {
        padding: 5,
        textAlign: 'justify',
    },
    contentTitle: {
        padding: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: Color.secondaryBlueColor
    }
});

export default ColapsableOrder;