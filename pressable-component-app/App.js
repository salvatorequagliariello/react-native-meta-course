import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import LittleHeader from './components/Header';
import MenuList from './components/MenuItems';

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View style={styles.container}>
      <LittleHeader />
      <Pressable style={styles.button} onPress={() => setShowMenu(!showMenu)}>
        {!showMenu && <Text style={styles.buttonText}>Show menu</Text>}
        {showMenu && <Text style={styles.buttonText}>Home</Text>}
      </Pressable>
      <Image source={{uri:"https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/yh3S-4LcQXGO99idg4HpPg_92f701034da44942a42fee3e878fc1a1_LIttle-Lemon-Logo.png?expiry=1690156800000&hmac=Coe_7-DdepGwkelK77Sh1uM3CEE6CydpAWeTw_2Eyjk"}} />
      {showMenu && <MenuList />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  button: {
    width: "40%",
    backgroundColor: "#333333",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 1
  }

});
