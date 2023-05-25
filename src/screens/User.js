import React from 'react'
import { View, Text,StyleSheet} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const User = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Text style={style.headerTitle}>All Listed Ad's</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  headerTitle: {

    fontSize: 23,
    fontWeight: 'bold',
    textAlign:'center',
    backgroundColor:'#D9D9D9',
    lineHeight: 30,
    paddingHorizontal: 10,
    padding: 15,
  },
});
export default User;