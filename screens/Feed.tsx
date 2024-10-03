import { View, Text ,ScrollView } from 'react-native'
import React from 'react'
import Locationcard from '../components/Locationcard'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
 
 

const Feed = () => {

  const navigation:any=useNavigation()

  return (
    <View className='flex bg-neutral-50'>
        
        <View className='p-4 shadow-lg shadow-gray-900 bg-white flex flex-row justify-between items-center'>
        <Text className='text-3xl font-bold tracking-widest'>
              <Text style={{ color: '#1990b0' }}>Clay</Text>
              <Text style={{ color: '#e7852f' }}>Brix</Text>
            </Text>
            <FontAwesome name="user-circle" size={40} color="black" onPress={()=>navigation.navigate('profile')} />
      </View>
      <ScrollView className='mx-3' showsVerticalScrollIndicator={false}>
      <View className='mt-4'>
        <Text className='text-lg font-bold'>New Homes for Sale</Text>
      </View>
      <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
       <Locationcard/>
      
      </ScrollView>

      <View >
      <View className='mt-4'>
        <Text className='text-lg font-bold'>Homes in Norman</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
       <Locationcard/>
       <Locationcard/>
       <Locationcard/>
       <Locationcard/>
       <Locationcard/>
       <Locationcard/>
      </ScrollView>
      </View>

      <View >
      <View className='mt-4'>
        <Text className='text-lg font-bold'>Homes in Richfield</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
       <Locationcard/>
       <Locationcard/>
       <Locationcard/>
       <Locationcard/>
       <Locationcard/>
       <Locationcard/>
      </ScrollView>
      </View>
      <View className='mb-[150px]'>
      <View className='mt-4'>
        <Text className='text-lg font-bold'>Homes in Richfield</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
       <Locationcard/>
       <Locationcard/>
       <Locationcard/>
       <Locationcard/>
       <Locationcard/>
       <Locationcard/>
      </ScrollView>
      </View>
      </ScrollView>
      
    </View>
  )
}

export default Feed