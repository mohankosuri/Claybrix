 import { View, Text ,StatusBar } from 'react-native'
 import React, { useEffect } from 'react'
import Splashscreen from './screens/Splashscreen'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './screens/BottomTabs';
import Login from './screens/Login';
import OtpScreen from './screens/Otpscreen';
import { Detaildlocation } from './components/Locationcard';
import GetPreQualified from './components/GetpreQualified';
import HelpCenter from './components/HelpCenter';
import HiddenHomes from './components/HiddenHomes';
import MortgageRates from './components/MortgageRates';
import Profile from './screens/Profile';
import Filter from './components/Filter';

 

 
 
 const App = () => {

  const stack=createNativeStackNavigator()
  


   return (
     <View className="flex-1">
      
      
      <NavigationContainer>
        <stack.Navigator initialRouteName='splash'>
          <stack.Screen name='splash' component={Splashscreen} options={{headerShown:false}}></stack.Screen>
          <stack.Screen name='home' component={BottomTabs} options={{headerShown:false}}></stack.Screen>
          <stack.Screen name='Login' component={Login}  ></stack.Screen>
          <stack.Screen name='otpscreen' component={OtpScreen} ></stack.Screen>
          <stack.Screen name='detailedlocation' component={Detaildlocation} options={{headerShown:false}}></stack.Screen>
          <stack.Screen name='getprequalified' component={GetPreQualified} ></stack.Screen>
          <stack.Screen name='helpcenter' component={HelpCenter} ></stack.Screen>
          <stack.Screen name='hiddenhomes' component={HiddenHomes} ></stack.Screen>
          <stack.Screen name='mortgagerates' component={MortgageRates} ></stack.Screen>
          <stack.Screen name='profile' component={Profile} ></stack.Screen>
          <stack.Screen name='filter' component={Filter} ></stack.Screen>
        </stack.Navigator>
      </NavigationContainer>
        
     </View>
   )
 }
 
 export default App