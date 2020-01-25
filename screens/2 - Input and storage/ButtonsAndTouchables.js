import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
} from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
    state = {
        count: 0
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.count}</Text>

                <Button title="Plain button" onPress={this.increaseCounter} />

                <Button
                    title="Tomato button"
                    color="tomato"
                    onPress={this.increaseCounter}
                />

                <TouchableHighlight onPress={this.increaseCounter}>
                    <Text>Touchable Highlight</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={this.increaseCounter}
                    activeOpacity={0.25}
                    underlayColor="tomato"
                    style={styles.touchable}>
                    <Text>Touchable Highlight 2</Text>
                </TouchableHighlight>

                <TouchableOpacity
                    onPress={this.increaseCounter}
                    style={styles.touchable}>
                    <Text>Touchable Opacity</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.increaseCounter}
                    activeOpacity={0.05}
                    style={styles.touchable}>
                    <Text>Touchable Opacity 2</Text>
                </TouchableOpacity>

                <TouchableWithoutFeedback
                    onPress={this.increaseCounter}
                    style={styles.touchable}>
                    <View style={{ borderWidth: 2 }}>
                        <Text>Touchable Without Feedback</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        );
    }

    increaseCounter = () => this.setState(({ count }) => ({ count: count + 1 }));
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    touchable: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    },
});
