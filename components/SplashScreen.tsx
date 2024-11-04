import React, { useRef, useState } from "react";
import { View, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const SplashScreen = () => {
  const slides = [
    { id: "1", image: require("../assets/bg1.jpg") },
    { id: "2", image: require("../assets/building.jpg") },
    { id: "3", image: require("../assets/claybrixsplash.jpg") },
  ];

  const navigator: any = useNavigation();
  const flatListRef: any = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSkip = () => {
    navigator.navigate("home");
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigator.navigate("home");
    }
  };

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  const viewConfig = { viewAreaCoveragePercentThreshold: 50 };

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        ref={flatListRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
        renderItem={({ item }) => (
          <View style={[styles.slide, { width }]}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        {currentIndex < slides.length - 1 ? (
          <TouchableOpacity onPress={handleSkip} style={styles.button}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>{currentIndex < slides.length - 1 ? "Next" : "Get Started"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.9,
  },
  button: {
    backgroundColor: "#000",
    padding: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default SplashScreen;
