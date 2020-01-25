import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons'

const image = require("../icon.png");


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image resizeMode="cover" style={styles.logo} source={image} />
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    logo: {
        width: 200,
        height: 200,
    }
});
