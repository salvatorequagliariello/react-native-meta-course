import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import menuItems from "./menuItems.json"
const { menu } = menuItems;


const renderItem = ({item}) => {
  return (
    <View style={{flexDirection: "row", justifyContent:"space-between", paddingHorizontal: 20, backgroundColor: '#495E57', paddingVertical: 10}}>
      <Text style={{fontSize: 19, color: "white"}}>{item.title}</Text>
      <Text style={{fontSize: 19, color: "#F4CE14"}}>$ {item.price}.00</Text>
    </View>
  )
}

export default App = () => {
  return (
    <SafeAreaView style={menuStyles.container}>
      <Text style={menuStyles.headerText}>Little Lemon</Text>
      <FlatList data={menu} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  headerText: {
    color: '#F4CE14',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 50
  },
});
