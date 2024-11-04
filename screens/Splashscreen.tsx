import { View, Text, ImageBackground, StatusBar, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

const Splashscreen = () => {
  const navigator: any = useNavigation();

  // Create an array of Animated values for each letter
  const animatedValues = useRef(
    Array.from({ length: 8 }).map(() => new Animated.Value(0))
  ).current; // 8 letters for "ClayBrix"

  const overallScale = useRef(new Animated.Value(1)).current; // Overall scale for entire text

  useEffect(() => {
    // Define animations for each letter with staggered delays
    const animations = animatedValues.map((value, index) => {
      return Animated.spring(value, {
        toValue: 1,
        friction: 5,
        tension: 100,
        useNativeDriver: true,
        delay: index * 150, // delay each letter by 150ms more than the previous one
      });
    });

    // Start all letter animations sequentially, then scale the entire text slightly
    Animated.stagger(150, animations).start(() => {
      // After all letters are animated, add a final bounce to the whole word
      Animated.sequence([
        Animated.timing(overallScale, {
          toValue: 1.2,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(overallScale, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Navigate to home screen after all animations are complete
        navigator.reset({
          index: 0,
          routes: [{ name: 'home' }],
        });
      });
    });
  }, [animatedValues]);

  // Function to render each animated letter with a scale-in and bounce effect
  const renderAnimatedText = (text:any, animatedValues:any) => {
    return text.split('').map((letter:any, index:any) => (
      <Animated.Text
        key={index}
        style={{
          opacity: animatedValues[index], // use the animated value for opacity
          transform: [
            {
              scale: animatedValues[index].interpolate({
                inputRange: [0, 1],
                outputRange: [0.3, 1], // Scale from 0.3 to 1 for a bounce effect
              }),
            },
          ],
          fontSize: 50,
          fontWeight: 'bold',
          color: index < 4 ? '#1990b0' : '#e7852f', // Different color for "Clay" and "Brix"
        }}
      >
        {letter}
      </Animated.Text>
    ));
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Hide the status bar */}
      <StatusBar hidden={true} />
      <ImageBackground
        source={require('../assets/house.jpg')}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        resizeMode="cover"
      >
        <Animated.View style={{ transform: [{ scale: overallScale }] }}>
          <View style={{ flexDirection: 'row' }}>
            {/* Render "ClayBrix" with animations for each letter */}
            {renderAnimatedText('ClayBrix', animatedValues)}
          </View>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

export default Splashscreen;
