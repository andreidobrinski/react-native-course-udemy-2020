import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const { state: { currentLocation } } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  };

  return (
    <MapView
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 123,
        longitudeDelta: 123,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 123,
        longitudeDelta: 123,
      }}
      style={styles.map}
    >
      {/* <Polyline
        coordinates={points}
      /> */}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  }
});

export default Map;