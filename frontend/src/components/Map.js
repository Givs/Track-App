import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
    return (
        <View>
            <MapView style={styles.map}>
            

            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
   map: {
       height: 900
   }
});

export default Map;