import { View, Text, SafeAreaView, Animated,ImageBackground, StatusBar } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const Splashscreen = () => {
  const navigator: any = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity: 0 (hidden)

  useEffect(() => {
    
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1, 
        duration: 1000 ,
        useNativeDriver: true,
      }),
      Animated.delay(3000),  
      Animated.timing(fadeAnim, {
        toValue: 0, 
        duration: 1000, 
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigator.navigate('home');
    });
  }, [fadeAnim]);

  return (
    <View className='h-full w-full'>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae"></StatusBar>
      <ImageBackground className='flex-1 bg-cover' source={require('../assets/bg1.jpg')}>
        <View className='flex justify-center items-center mt-[350px]'>
          <Animated.View style={[{ opacity: fadeAnim }]}>
            <Text className='text-5xl font-bold tracking-widest'>
              <Text style={{ color: '#1990b0' }}>Clay</Text>
              <Text style={{ color: '#e7852f' }}>Brix</Text>
            </Text>
          </Animated.View>
        </View>
       
      </ImageBackground>
    </View>
  );
}

export default Splashscreen;
