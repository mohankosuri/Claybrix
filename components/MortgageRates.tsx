 


import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, PermissionsAndroid, Platform, Modal, Text, Image, TextInput, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Circle, Polyline,Polygon } from 'react-native-maps';
 
import MapViewDirections from 'react-native-maps-directions';

interface MarkerType {
  latlng: { latitude: number; longitude: number };
  title: string;
  description: string;
  image: string;
  price: string;
}

const MortgageRates = () => {
  const [origin, setOrigin] = useState({
    latitude: 26.912434, longitude: 75.787270,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [destination, setDestination] = useState({
    latitude: 15.299326, longitude: 74.124007,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCYQ_JWgmQ4S5WI1fVJZNoagYoDVFHkl58';
  
  
  

 

 
  

  

   

  

  

  return (
    <View className='flex-1'>
      <View style={styles.container}>
        
      
        
        <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={origin}
         
        
        
        zoomEnabled={true}
       
        showsBuildings={true}
        showsMyLocationButton={true}
       
        
        
        showsUserLocation={true}
      >
        <Marker coordinate={origin} draggable onDragEnd={(destination:any)=>setOrigin(destination.nativeEvent.coordinate)}/>
        <Marker coordinate={destination} draggable onDragEnd={(destination:any)=>setDestination(destination.nativeEvent.coordinate)}/>
        <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
     strokeWidth={3}
    strokeColor="hotpink"
  />
       
      </MapView>
         
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  searchBox: {
    position: 'absolute',
    top: 20,
    width: '80%',
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#fff',
    zIndex: 10,
    
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  drawButton: {
    position: 'absolute',
    top: 600,
    right: 20,
    zIndex: 1,
    backgroundColor: '#f4f6f6',
    borderRadius: 50,
    padding: 10,
     
  },
  satelliteButton: {
    position: 'absolute',
    top: 530,
    right: 18,
    zIndex: 1,
    backgroundColor: '#f4f6f6',
    borderRadius: 50,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  modalContent: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
  },
  locationImage: {
    width: 300,
    height: 200,
    marginBottom: 15,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});


export default MortgageRates;
