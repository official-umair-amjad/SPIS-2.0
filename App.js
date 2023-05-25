import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './src/screens/Home';
import COLORS from './src/consts/colors';
import User from './src/screens/User';
import Details from './src/screens/Details';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Homee" component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color="black" />
          ),
        }}
      />
      <Stack.Screen name="Details" component={Details}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color="black" />
          ),
        }}
      />
    </Stack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={MyStack}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          headerTitleContainerStyle: { justifyContent: 'center', alignItems: 'center' },
          headerStyle: {
            backgroundColor: '#81b29a',
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            height: 100
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerBackTitleStyle: {
            color: 'transparent',
          },
          headerBackTitleVisible: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={24} color="black" />
          ),
          headerRight: () => (
            <MaterialIcons
              name="settings"
              size={24}
              color="white"
              style={{ marginRight: 16 }}
            />
          ),
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              size={24}
              color="white"
              style={{ marginLeft: 16 }}
            />
          ),
        }}
      />

      <Tab.Screen name="User" component={User} options={{
        headerShown: false,
        headerTitleAlign: 'center',
        headerTitleContainerStyle: { justifyContent: 'center', alignItems: 'center' },
        headerStyle: {
          backgroundColor: 'pink',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          height: 100
        },
        headerBackTitleStyle: {
          color: 'transparent',
        },
        headerBackTitleVisible: false,
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="store" size={24} color="black" />
        ),
        headerRight: () => (
          <MaterialIcons
            name="settings"
            size={24}
            color="black"
            style={{ marginRight: 16 }}
          />
        ),
        headerLeft: () => (
          <MaterialIcons
            name="menu"
            size={24}
            color="blue"
            style={{ marginLeft: 16 }}
          />
        ),
      }}
      />


    </Tab.Navigator>)
}

export default function App() {
  return (

    <NavigationContainer>
      <StatusBar hidden={true}/>
      <MyTabs/>
    </NavigationContainer>
  );
}


