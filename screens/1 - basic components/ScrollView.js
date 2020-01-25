import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        items: new Array(100).fill(0).map((a, i) => i).map(i => ({
            title: `Title ${i}`,
            content: `Content number ${i}. It's a bit longer than title. It's even long enough to force a line break`,
        })),
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    {this.state.items.map(({ title, content }) => (
                        <View key={title} style={styles.item}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.content}>{content}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    scrollView: {
        flex: 1,
        alignSelf: 'stretch',
    },
    item: {
        paddingHorizontal: 10,
    },
    title: {
        fontWeight: 'bold',
        marginVertical: 5,
    },
    content: {
        marginBottom: 10,
    }
});