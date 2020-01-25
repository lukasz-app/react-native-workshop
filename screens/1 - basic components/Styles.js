import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Change code in the editor and watch it change on your phone!
          <Text style={{ fontWeight: 'bold' }}> Text can be nested</Text>
                </Text>
                <Text style={{ fontSize: 20 }}>And styles can be defined inline</Text>
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
    paragraph: {
        margin: 24, // By default we are defining "px"
        fontSize: 18,
        textAlign: 'center',
        color: '#FFF',
        backgroundColor: '#34485e'
    },
});
