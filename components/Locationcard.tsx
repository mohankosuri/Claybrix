import { View, Text,Image,TouchableOpacity,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const location=[
  {id: 1, "Amount": 100050, "beds": "5bd", "bath": "4ba", "area": "2500 sqft", image: "https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=0&k=20&c=0Dqjm3NunXjZtWVpsUvNKg2A4rK2gMvJ-827nb4AMU4="},
  {id: 2, "Amount": 235060, "beds": "2bd", "bath": "1ba", "area": "3000 sqft", image: "https://www.shutterstock.com/image-photo/real-estate-sold-another-success-260nw-274885583.jpg"},
  {id: 3, "Amount": 450070, "beds": "3bd", "bath": "4ba", "area": "2000 sqft", image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
  {id: 4, "Amount": 890080, "beds": "4bd", "bath": "4ba", "area": "1500 sqft", image: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
  {id: 5, "Amount": 670090, "beds": "1bd", "bath": "4ba", "area": "1500 sqft", image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
  {id: 6, "Amount": 430000, "beds": "5bd", "bath": "1ba", "area": "1500 sqft", image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
  {id: 7, "Amount": 520000, "beds": "1bd", "bath": "5ba", "area": "3000 sqft", image: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
  {id: 8, "Amount": 610000, "beds": "5bd", "bath": "4ba", "area": "1000 sqft", image: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg"},
  {id: 9, "Amount": 735000, "beds": "2bd", "bath": "1ba", "area": "1000 sqft", image: "https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
  {id: 10, "Amount": 890000, "beds": "1bd", "bath": "3ba", "area": "2000 sqft", image: "https://images.pexels.com/photos/259593/pexels-photo-259593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
]


export const Detaildlocation=({route}:any)=>{

  const { item } = route.params;
    const navigation:any = useNavigation();
    return(
      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer} key={item.id}>
        <Image
          source={{ uri: item.image }}
          style={styles.mainImage}
        />
        <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.favoriteButton}>
          <Ionicons name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.thumbnails}>
          <Image source={{ uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-Z3bfIFhANODtbGg6vJzQ0dOJ.png?st=2024-09-20T04%3A30%3A27Z&se=2024-09-20T06%3A30%3A27Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-19T23%3A19%3A47Z&ske=2024-09-20T23%3A19%3A47Z&sks=b&skv=2024-08-04&sig=jejyk7/g2656SffWh6hHzd3WlFNSQIPX5nmtZA5kQC0%3D' }} style={styles.thumbnail} />
          <Image source={{ uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-SNib0tgkaBxIEyuCQEmDH1g0.png?st=2024-09-20T04%3A30%3A27Z&se=2024-09-20T06%3A30%3A27Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-19T23%3A22%3A21Z&ske=2024-09-20T23%3A22%3A21Z&sks=b&skv=2024-08-04&sig=TfmjIzVf19aIs9zVnA%2BcksaFQUufsUxaSPKqPgel5s8%3D' }} style={styles.thumbnail} />
          <Image source={{ uri: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-TqCluEb6HtV9lDUj8EAEIEmp.png?st=2024-09-20T04%3A30%3A26Z&se=2024-09-20T06%3A30%3A26Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-19T23%3A10%3A55Z&ske=2024-09-20T23%3A10%3A55Z&sks=b&skv=2024-08-04&sig=PGABYCUgSK7ldC5u2Peeji4oKKtnZgoY/WT1xM0vdCg%3D' }} style={styles.thumbnail} />
          
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>${item.Amount}</Text>
        
        
        <View style={styles.overview}>
          <Text style={styles.overviewTitle}>Overview</Text>
          <View style={styles.details}>
            <View style={styles.detailItem}>
              <Ionicons name="bed-outline" size={20} color="#00bfa5" />
              <Text>Beds:{item.beds}</Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="water-outline" size={20} color="#00bfa5" />
              <Text>Baths:{item.bath}</Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="water-outline" size={20} color="#00bfa5" />
              <Text>Area:{item.area}</Text>
            </View>
          </View>
          
        </View>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Call</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e0f7f9',
    alignItems: 'center',
    padding: 16,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    position: 'relative',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  mainImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  thumbnails: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    flexDirection: 'column',
    gap: 5,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  content: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2e2e2e',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00bfa5',
    marginBottom: 20,
  },
  priceInfo: {
    fontSize: 14,
    color: '#2e2e2e',
    fontWeight: 'normal',
  },
  overview: {
    marginBottom: 20,
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#2e2e2e',
  },
  details: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  description: {
    color: '#2e2e2e',
    lineHeight: 22,
  },
  bookButton: {
    backgroundColor: '#00bfa5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  detailText: {
    fontSize: 16,
    color: '#4a5568',
    marginBottom: 8,
  },
});

const Locationcard = () => {
  const navigation:any= useNavigation()
  
  return (
    <View className='flex-1 flex-row'>
      {location.map((item)=>(
        <View key={item.id}>
        <TouchableOpacity className='rounded-md p-2' onPress={()=>navigation.navigate('detailedlocation',{item})} >
        <Image src={item.image} className='w-[300px] h-[230px] rounded-md'/>
         
       <View className='my-2'><Text className='text-gray-800 font-bold text-lg'>${item.Amount}</Text></View>
       <View className='flex flex-row justify-between'>
         <View className='flex flex-row space-x-2 items-center'>
         <FontAwesome name="bed" size={20} color="gray" />
         <Text>{item.beds}</Text>
         </View>
         <View className='flex flex-row space-x-2 items-center'>
         <FontAwesome name="bathtub" size={20} color="gray" />
         <Text>{item.bath}</Text>
         </View>
         <View className='flex flex-row space-x-2 items-center'>
         <MaterialCommunityIcons name="set-square" size={20} color="gray" />
         <Text>{item.area}</Text>
         </View>
       </View>
       <View className='flex-col gap-1 mt-2'>
       <Text>5823 Windstone Dr</Text>
       <Text>Norman, Ok</Text>
       <Text className='text-xs'>AGENT LISTING</Text>
       <Text className='text-xs'>Listed Thu at 7:00 pm</Text>
       </View>
     </TouchableOpacity>
     </View> ))}
      
    </View>
  )
}

export default Locationcard