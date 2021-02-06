import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const { state: { currentLocation, locations } } = useContext(LocationContext);

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
      //- region automatically updates the map
      //- Circle does this as well by drawing an element
      // region={{
      //   ...currentLocation.coords,
      //   latitudeDelta: 123,
      //   longitudeDelta: 123,
      // }}
      style={styles.map}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
      <Polyline
        coordinates={locations.map(loc => loc.coords)}
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