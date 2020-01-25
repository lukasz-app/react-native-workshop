import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    state = {
        items: [{ id: 1, name: 'Foo' }, { id: 2, name: 'Bar' }, { id: 3 }],
    };

    render() {
        return (
            <View>
                <Text>Home</Text>
                {this.state.items.map(item => (
                    <Button
                        key={item.id}
                        title={`Show item ${item.id}`}
                        onPress={() => this.props.navigation.navigate('Item', item)}
                    />
                ))}
            </View>
        );
    }
}

const ItemScreen = ({ navigation }) => (
    <View>
        <Text>Item #{navigation.state.params.id}</Text>
        <Text>Item #{navigation.getParam('id', '-')}</Text>
        <Text>{navigation.getParam('unknownParam', 'Not found unknownParam')}</Text>
        <Button title="Rabbit hole" onPress={() => navigation.push('Item', navigation.state.params)} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
);
ItemScreen.navigationOptions = ({ navigation }) => ({ title: `Top title for Item #${navigation.getParam('id')}` })

const Navigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Item: ItemScreen, // Shorthand configuration
    },
    {
        initialRouteName: 'Home',
        headerMode: 'float',
    }
);
const AppContainer = createAppContainer(Navigator); // Create container using our navigator stack

export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}
