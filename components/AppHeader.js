import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@ui-kitten/components';


const AppHeader = ({ title, subtitle}) => {
    return (
        <View style={styles.headerContainer}>
            <Text category='h2' style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
}

export default AppHeader;

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#fff',
        borderBottomColor: 5,
        padding: 20,
        width: '100%'
    },
    title: {
        fontSize: 20,
    },
    subtitle: {
        fontSize: 20
    }
});