import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage, TextInput } from 'react-native';
import Constants from 'expo-constants';

const textKey = 'devmeeting:text';

export default class App extends Component {
    state = { text: '' };

    componentWillMount() {
        AsyncStorage.getItem(textKey).then(text => this.setState({ text }));
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.text}
                    placeholder="Enter text"
                    onChangeText={this.textChanged}
                    style={styles.input}
                />
            </View>
        );
    }

    textChanged = text => {
        this.setState({ text });
        AsyncStorage.setItem(textKey, text);
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 100,
    },
});