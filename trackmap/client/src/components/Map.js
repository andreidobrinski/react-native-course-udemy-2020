import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({

    });
  }

  return (
    <MapView
      initialRegion={{
        latitude: 123,
        longitude: 123,
        latitudeDelta: 123,
        longitudeDelta: 123,
      }}
      style={styles.map}
    >
      <Polyline
        coordinates={points}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  }
});

export default Map;