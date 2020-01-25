import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        value: '',
        actions: [],
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter text"
                    returnKeyType="done"
                    autoFocus={true}
                    value={this.state.value}
                    onChangeText={this.textChanged}
                    onSubmitEditing={this.submit}
                />
                <ScrollView style={styles.scrollContainer}>
                    {this.state.actions.map(({ timestamp, type, value }) => (
                        <Text key={timestamp}>
                            <Text style={{ fontWeight: 'bold' }}>{type}</Text>
                            <Text>{JSON.stringify(value)}</Text>
                        </Text>
                    ))}
                </ScrollView>
            </View>
        );
    }

    textChanged = text =>
        this.setState(state => ({
            value: text,
            actions: state.actions.concat({
                timestamp: new Date().getTime(),
                type: 'TEXT_CHANGED',
                value: text,
            }),
        }));

    submit = () =>
        this.setState(state => ({
            actions: state.actions.concat({
                timestamp: new Date().getTime(),
                type: 'TEXT_SUBMIT',
            }),
        }));
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    textInput: {
        flex: 1,
        alignSelf: 'center',
        width: 300
    },
    scrollContainer: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#abaeaf',
        alignSelf: 'stretch',
    }
});