import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';

const { width } = Dimensions.get('window');

export default class App extends Component {
    state = { location: null };

    componentWillMount() {
        const geolocation = navigator.geolocation;

        if (geolocation.requestAuthorization) {
            geolocation.requestAuthorization();
        }

        geolocation.getCurrentPosition(
            location => this.setState({ location }, this._tryShowLocation),
            console.error
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    ref={this._setMap}
                    style={styles.map}
                    showsUserLocation={true}
                    maxZoomLevel={19}
                />
            </View>
        );
    }

    _setMap = map => {
        this.map = map;
        this._tryShowLocation();
    };

    _tryShowLocation = () => {
        if (this.map && this.state.location) {
            this.map.fitToCoordinates([this.state.location.coords], {
                animated: true,
            });
        }
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
    map: {
        width,
        minHeight: 100,
        flex: 1,
    },
});
