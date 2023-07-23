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
      <Stack.Navigator initialRouteName="Form"  screenOptions={{headerStyle: {
          backgroundColor: "#333333",
          borderTopWidth: 20,
          height: 50
        }, headerTintColor: '#fff',
        headerTitleStyle: {
          textAlign: "center",
          fontWeight: '200',
          fontSize: 27,
        }, statusBarTranslucent: true, statusBarStyle: "inverted"}} >
        <Stack.Screen name="Form" component={FeedbackForm} options={{title: "LITTLE LEMON"}} />
        <Stack.Screen name="Welcome" component={HomeScreen} options={{title: "LITTLE LEMON"}} />
        <Stack.Screen name="Menu" component={MenuList} options={{title: "LITTLE LEMON"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

