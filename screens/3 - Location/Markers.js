/* global navigator */
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';

const { width } = Dimensions.get('window');

export default class App extends Component {
    state = { location: null };

    componentDidMount() {
        const geolocation = navigator.geolocation;

        if (geolocation.requestAuthorization) {
            geolocation.requestAuthorization();
        }

        geolocation.getCurrentPosition(
            location => this.setState({ location }),
            console.error
        );
    }

    render() {
        const { location } = this.state;

        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    maxZoomLevel={19}
                >
                    {location && <MapView.Marker coordinate={location.coords} />}
                </MapView>
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
    map: {
        width,
        minHeight: 100,
        flex: 1,
    },
});
