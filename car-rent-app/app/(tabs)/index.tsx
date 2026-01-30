import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { FlatList, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

export default function Tabs() {
  const router = useRouter();
  const data = [
    { id: '1', image: require('../../assets/images/audi.png') },
    { id: '2', image: require('../../assets/images/bmw.png') },
    { id: '3', image: require('../../assets/images/ford.png') },
    { id: '4', image: require('../../assets/images/porsche.png') },
    { id: '5', image: require('../../assets/images/hyundai.png') },
  ];
  const cars = [
    { id: '1', image: require('../../assets/images/auu.png'), name: 'Audi A8', price: '$1,200', rating: 4.8, revirews: 140 },
    { id: '2', image: require('../../assets/images/toyota.png'), name: 'Toyota Camry', price: '$900', rating: 4.5, revirews: 120 },
  ];
  return (
    <ScrollView className='flex-1'>
      {/* navbar hissesi */}
      <View className='flex-row px-5 mt-[30px]'>
        <View className="mt-10 w-[50px] h-[43px] border-2 border-transparent rounded-[16px] px-3 py-2" style={{ boxShadow: 'inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}  >
          <Ionicons name="location" size={24} color="#FFCD1D" />
        </View>

        <View className='ml-5 mt-10'>
          <Text className='text-[16px] text-[#000000B0]'>Your Location</Text>
          <View className='flex-row'>
            <Text className='text-[18px] text-[#000000]'>Ngangphaf,Selman</Text>
            <Ionicons name="chevron-down" size={20} color="#000000" className='mt-1 ml-1' />
          </View>
        </View>
        <Image source={require('../../assets/images/qaqas.jpg')} style={{ width: 45, height: 45, borderRadius: 15, marginTop: 40, marginLeft: 55 }} />
      </View>

      {/* Main Part */}
      <Text className='text-[32px] font-medium mt-[55px] px-5'>Find your favourite vechicle.</Text>

      <View className=''>
        {/* Search bar */}
        <View className='relative border-2 border-transparent rounded-[30px] mx-5 mt-3 px-6 py-3 z-20' style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>
          <Ionicons name="search" size={24} color="#000000B0" className='absolute top-6 left-6' />
          <TextInput className='text-[16px] text-[#000000B0] text-center' placeholder='Search for cars'></TextInput>
        </View>
        {/* Body Part */}
        <View className='border-2 mt-[-12px] z-10 border-gray-300 rounded-[30px] px-3 py-4' style={{ width: "100%"  }}>
          <View className='flex-row justify-between '>
            <Text className='text-[22px] font-semibold'>Top Brands</Text>
            <Text className='text-[16px] font-semibold text-[#FF6F23]'>See All</Text>
          </View>


          <FlatList style={{ marginTop: 20 }} data={data} renderItem={({ item }) => (
            <Image source={item.image} style={{ width: 83, marginRight: 10, height: 67, borderRadius: 10 }} />
          )} horizontal keyExtractor={(item) => item.id} showsHorizontalScrollIndicator={false} />


          <View className='flex-row justify-between mt-6'>
            <Text className='text-[22px] font-semibold'>Available Near You</Text>
            <Text className='text-[16px] font-semibold text-[#FF6F23]'>See All</Text>
          </View>

          <FlatList style={{ marginTop: 20 }} data={cars} renderItem={({ item }) => (
            <View className='bg-white rounded-[20px] mb-4' style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', marginRight: 10 }}>

              <View style={{ boxShadow: 'inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)', padding: 10, borderRadius: 20, margin: 10 }}>
                <Image source={item.image} style={{ width: 275, height: 140 }} />
              </View>

              <View className='px-5 '>
                <Text className='text-[20px] font-semibold mt-4 ml-4'>{item.name}</Text>
              </View>

              <View className='flex-row justify-between px-5 mt-2 mb-4'>
                <Ionicons name="star" size={20} color="#FFCD1D" className='mt-1' />
                <Text className='text-[16px] font-semibold ml-[-10px] mt-1'>{item.rating} ({item.revirews} reviews)</Text>
                <View className='ml-2 flex-row'>
                  <Text className='text-[20px] font-bold'>{item.price}</Text>
                  <Text className='text-[20px] font-semibold ml-1 text-gray-500'>/day</Text>
                </View>
              </View>
              <Pressable className='bg-[#FF6F23] rounded-[10px] mx-5 mb-4 px-10 py-3' onPress={() => router.push('/car-detail') }>
                <Text className='text-[16px] font-semibold text-white text-center'>Rent Now</Text>
              </Pressable>
            </View>
          )} horizontal keyExtractor={(item) => item.id} showsHorizontalScrollIndicator={false} />
        </View>
      </View>
    </ScrollView>
  );
}