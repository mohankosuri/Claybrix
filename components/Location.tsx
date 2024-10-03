import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, PermissionsAndroid, Platform, Modal, Text, Image, TextInput, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Circle, Polyline,Polygon } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomMarker from './CustomerMarker';
import Search from './Search';

interface MarkerType {
  latlng: { latitude: number; longitude: number };
  title: string;
  description: string;
  image: string;
  price: string;
}

const Location = () => {
  const [region, setRegion] = useState({
    latitude: 28.613939,
    longitude: 77.209021,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  
  const [isDrawing, setIsDrawing] = useState(false);
  const [circle, setCircle] = useState<{ center: any; radius: number } | null>(null);
  const [polylines, setPolylines] = useState<{ latitude: number; longitude: number }[]>([]);
  
  const [filteredMarkers, setFilteredMarkers] = useState<MarkerType[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  
  const [markers, setMarkers] = useState<MarkerType[]>([
    {
      latlng: { latitude: 28.613939, longitude: 77.209021 },
      title: 'India Gate',
      description: 'A war memorial located in New Delhi, India.',
      image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQrV0nBbrsaaSk9zhN0ym_8kw6gRn_dvSzG8I1tHJjbyPW4kldsXam3p90OpfBCzvdWG7j5chTiVa6aCE6Mw9VD5L5uIKw4hmw-4THe4A',
      price:"$250k"
    },
    {
      latlng: { latitude: 27.175144, longitude: 78.042142 },
      title: 'Taj Mahal',
      description: 'A white marble mausoleum located in Agra, India.',
      image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSsdDXD90U3dRij6Cxo9KzD-BoHlQKDUk4pd1eoMszF6jr5wd-ssnFSbvY5-1pu0bMfQrnwKN7GZ6XHVZrjQ38Dfb2YbG93GxAqIiGML7o',
      price:"$350k"
    },
    {
      latlng: { latitude: 19.076090, longitude: 72.877426 },
      title: 'Gateway of India',
      description: 'A historical monument located in Mumbai, India.',
      image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSLwePtbZlW-_uTpjtRxbfJ2nSrN-YVuB3zwGwYhsVJT8tjk5Je0FVwR12m36hn39SoI3jlkzEx3hzXRA9oWjCJFD2Q3ceEs6wKKw7VTw',
       price:"$450k"
    },
    {
      latlng: { latitude: 12.971599, longitude: 77.594566 },
      title: 'Bangalore Palace',
      description: 'A royal palace located in Bangalore, Karnataka, India.',
      image: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQaFVbH3BHSy2wrEGYbxQDsV1nYiN1ZoENpeWPxBVZH6Y6cKbuSr6aYST_p4M4M2c60FEc8MQ_YLddcpCXCeITJUE7E00xPEL2RgRf2YA',
       price:"$100k"
    },
    {
      latlng: { latitude: 13.412469, longitude: 103.866986 },
      title: 'Charminar',
      description: 'A mosque and monument located in Hyderabad, India.',
      image: 'https://dailymela.com/wp-content/uploads/2024/05/Charminar-Hyderabad-1024x536.jpg',
       price:"$500k"
    },
    {
      latlng: { latitude: 21.170240, longitude: 72.831061 },
      title: 'Statue of Unity',
      description: 'The world\'s tallest statue located in Gujarat, India.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCNdcLSMGARC8WyBIK2xsCqk7TsigT0J7Ig&s',
       price:"$240k"
    },
    {
      latlng: { latitude: 15.299326, longitude: 74.124007 },
      title: 'Basilica of Bom Jesus',
      description: 'A UNESCO World Heritage Site located in Goa, India.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Basilica_of_bom_jesus_-_Front_View.jpg/375px-Basilica_of_bom_jesus_-_Front_View.jpg',
       price:"$190k"
    },
    {
      latlng: { latitude: 26.912434, longitude: 75.787270 },
      title: 'Hawa Mahal',
      description: 'A palace in Jaipur, India, known as the Palace of Winds.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTRAN4YDnNtHKpZjCF16GwrOm6BZjtgH7QrQ&s',
       price:"$1m"
    },
    {
      latlng: { latitude: 22.572645, longitude: 88.363892 },
      title: 'Victoria Memorial',
      description: 'A large marble building in Kolkata, India.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Victoria_Memorial_situated_in_Kolkata.jpg/1200px-Victoria_Memorial_situated_in_Kolkata.jpg',
       price:"$170"
    },
    {
      latlng: { latitude: 25.317644, longitude: 82.973915 },
      title: 'Kashi Vishwanath Temple',
      description: 'A famous Hindu temple dedicated to Lord Shiva in Varanasi, India.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Kashi_Vishwanath.jpg',
       price:"$950k"
    },
  ]);
  
  const [mapType, setMapType] = useState('standard'); 

  const handleMarkerPress = (marker: any) => {
    setSelectedMarker(marker);
    setModalVisible(true);
  };

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Location Permission",
            message: "This app needs access to your location.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the location");
        } else {
          console.log("Location permission denied");
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const toggleDrawingMode = () => {
    if (isDrawing) {
      // Reset circle and show all markers when exiting drawing mode
      setPolylines([]);
      setCircle(null);
      setFilteredMarkers(markers);
    } else {
      // Enable drawing mode and hide all markers
      setFilteredMarkers([]);
    }
    setIsDrawing(!isDrawing);
  };

  const toggleMapType = () => {
    setMapType((prevType) => (prevType === 'standard' ? 'hybrid' : 'standard'));
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedMarker(null);
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = markers.filter(marker =>
      marker.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredMarkers(filtered);
  };

  

  const handleMapPress = (event: any) => {
    if (!isDrawing) return;

    const { latitude, longitude } = event.nativeEvent.coordinate;

    // Set the circle center and radius
    if (!circle) {
      setCircle({ center: { latitude, longitude }, radius: 2000 }); // Example radius in meters
    }

    setPolylines((prev) => {
      const newPolylines = [...prev, { latitude, longitude }];
      return newPolylines;
    });
  };

  const isMarkerWithinCircle = (marker: MarkerType) => {
    if (!circle) return true; // If no circle, show all markers

    const distance = getDistance(
      circle.center.latitude,
      circle.center.longitude,
      marker.latlng.latitude,
      marker.latlng.longitude
    );

    return distance <= circle.radius; // Check if the marker is within the circle radius
  };

  const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371e3; // meters
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // in meters
  };

  useEffect(() => {
    if (circle) {
      const filtered = markers.filter(isMarkerWithinCircle);
      setFilteredMarkers(filtered);
    }
  }, [circle, markers]);

  

  return (
    <View className='flex-1'>
      <View style={styles.container}>
        <TextInput
          style={styles.searchBox}
          placeholder="Search..."
          value={searchText}
          onChangeText={handleSearch}
        />
        <TouchableOpacity style={styles.satelliteButton} onPress={toggleMapType}>
          <Ionicons name={mapType === 'hybrid' ? 'earth' : 'earth'} size={40} color={mapType === 'hybrid' ? "#2dd8d8" : "#b2babb"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawButton} onPress={toggleDrawingMode}>
          <Ionicons name={isDrawing ? "hand-left" : "hand-left"} size={40} color={isDrawing ? "#2dd8d8" : "#b2babb"} />
        </TouchableOpacity>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={region}
          spiderLineColor={"#140c98"}
          showsBuildings={true}
          showsMyLocationButton={true}
          
          clusterColor={"#140c98"}
          onPanDrag={handleMapPress}
          
          showsUserLocation={true}
          scrollEnabled={!isDrawing} 
          zoomEnabled={!isDrawing} 
          rotateEnabled={!isDrawing}
          showsTraffic={true}
           
          mapType={mapType}
        >
          {(isDrawing ? filteredMarkers : markers).map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
              onPress={() => handleMarkerPress(marker)}
            >
              <CustomMarker price={marker.price} />
            </Marker>
          ))}
          {isDrawing && circle && (
            <Circle
              center={circle.center}
              radius={circle.radius}
              strokeColor="rgba(255, 0, 0, 0.5)"
              fillColor="rgba(255, 0, 0, 0.2)"
            />
          )}
          {isDrawing && polylines.length > 1 && (
            <Polygon 
              coordinates={polylines} 
              strokeColor="red" 
              strokeWidth={3} 
              fillColor='pink'
            />
          )}
        </MapView>
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {selectedMarker && (
                <>
                  <Image source={{ uri: selectedMarker.image }} style={styles.locationImage} />
                  <Text>{selectedMarker.title}</Text>
                  <Text>{selectedMarker.description}</Text>
                  <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </Modal>
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


export default Location;
