import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import FeedbackForm from './components/FeedbackForm';
import LittleHeader from './components/HeaderLittle';
import MenuList from './components/MenuItems';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{ headerShown: false }}
      screenOptions={({route}) => ({tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name == "Welcome") iconName = "home";
        if (route.name == "Menu") iconName =  'ios-list';; 

        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: "blue",
      tabBarInactiveTintColor: "grey"})}>
        <Tab.Screen name="Welcome" component={HomeScreen}  />
        <Tab.Screen name="Menu" component={MenuList}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

