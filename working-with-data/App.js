import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const renderItem = ({item}) => {
  return (
    <View style={{flexDirection: "row", justifyContent:"space-between", paddingHorizontal: 20, backgroundColor: '#495E57', paddingVertical: 10}}>
      <Text style={{fontSize: 19, color: "white"}}>{item.title}</Text>
      <Text style={{fontSize: 19, color: "#F4CE14"}}>$ {item.price}.00</Text>
    </View>
  )
}

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMenu = async () => {
    try {
      const response = await fetch("https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json");
      const json = await response.json();
      setData(json.menu);
    } catch (error) {
      console.error(error);
    } finally  {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMenu();
    }, []);
  
  return (
    <SafeAreaView style={menuStyles.container}>
      <Text style={menuStyles.headerText}>Little Lemon</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
          <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id}/> 
      )}
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
