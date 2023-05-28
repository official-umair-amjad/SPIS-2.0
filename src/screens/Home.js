import React from 'react'
import { View, Text, SafeAreaView, Dimensions, StyleSheet, ImageBackground, TouchableOpacity, TextInput, FlatList, Image,Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../consts/colors';
import { ScrollView } from 'react-native-gesture-handler';
import Ads from "../consts/ads"

const { width } = Dimensions.get('screen');


const Home = ({ navigation }) => {
  const Card = ({Ads}) => {
    return(
<Pressable
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', Ads)}>
      <View style={style.card}>
        <Image source={Ads.image} style={style.cardImage}/>
        <View style={{marginTop: 10}}>
            {/* Title and price container */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {Ads.title}
              </Text>
              <Text
                style={{fontWeight: 'bold', color: COLORS.blue, fontSize: 16}}>
                ${Ads.price}
              </Text>
            </View>

            {/* Location text */}

            <Text style={{color: COLORS.grey, fontSize: 14, marginTop: 5}}>
              Brand: {Ads.brand} {"\n"}Condition:{Ads.condition}
            </Text>

            {/* Facilities container */}

          </View>
      </View>
    </Pressable>
    ); 
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <View style={style.header}>
        <MaterialCommunityIcons name="sort-variant" size={24} color="black" />
        <Text style={style.headertitle}>S P I S</Text>
        <MaterialCommunityIcons name="account" size={24} color="black" onPress={() => navigation.navigate('Login')}/>
      </View>
      <ScrollView>
        <Text style={style.headerTitle}>The New way to buy a smartphone</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, }}>
          <View style={style.searchInputContainer}>
            <TextInput placeholder="e.g: Asus rog zenphone 6 " />
          </View>
          <View style={style.sortBtn}>
            <MaterialCommunityIcons name="magnify" size={24} color="white" />
          </View>
        </View>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', padding: 20, }}>
          <View style={style.servicesContainer}>
          <View style={[style.servicesItemBtn, {backgroundColor:'#DD7249'}]}>
              <Text style={[style.servicesText, {color:COLORS.light}]}>Apply Inspection</Text>
            </View>
          </View>
          <View style={style.servicesContainer}>
            <View style={[style.servicesItemBtn, {backgroundColor:'#1D8DD8', paddingHorizontal:20,}]}>
              <Text style={[style.servicesText, {color:COLORS.light}]}>Sell Now</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={style.title}>Popular Ad's</Text>

        <FlatList
          snapToInterval={width - 20}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20, paddingVertical: 20}}
          data={Ads}
          renderItem={({item}) => <Card Ads={item} />}
        />
        {/* Render To Furnitures */}
        {/* <Text style={style.title}>Top Furniture</Text> */}
      </ScrollView>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headertitle: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: "bold"
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  stretch: {
    width: 380,
    height: 350,
    resizeMode: 'stretch',
    justifyContent:'space-evenly'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  headerbtn: {
    color: '#DD7249',
    fontSize: 18,
    lineHeight: 160,
    // letterSpacing:15,
    fontWeight: 'bold',
    marginLeft: 45,
    marginTop: 120,
    textAlign: 'left',
    backgroundColor: 'transparent',
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    width: '65%',
    // backgroundColor:COLORS.dark,
    lineHeight: 30,
    paddingHorizontal: 10,
    paddingLeft: 15,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
    // marginBottom:90,
  },
  sortBtn: {
    backgroundColor: "#DD7249",
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    textAlign:'center',
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: 15,
    marginLeft: 20,
  },
  servicesItemBtn: {
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    justifyContent:'center',
    width:140,
  },
  servicesText: {
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  card: {
    height: 250,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
    marginVertical:10,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
    resizeMode:'stretch'
  },
  facility: {flexDirection: 'row', marginRight: 15},
  facilityText: {marginLeft: 5, color: COLORS.grey},
});
export default Home;