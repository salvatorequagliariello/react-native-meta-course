import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import FeedbackForm from './components/FeedbackForm';
import LittleHeader from './components/HeaderLittle';
import MenuList from './components/MenuItems';

export default function App() {
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <LittleHeader />
      <StatusBar translucent={true}></StatusBar>
      <Stack.Navigator initialRouteName="Form" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Form" component={FeedbackForm} />
        <Stack.Screen name="Welcome" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

