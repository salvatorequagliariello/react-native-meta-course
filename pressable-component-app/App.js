import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import LittleHeader from './components/Header';
import MenuList from './components/MenuItems';
import HomeView from './components/HomeView';

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View style={styles.container}>
      <LittleHeader />
      {!showMenu && <HomeView />}
      <Pressable style={styles.button} onPress={() => setShowMenu(!showMenu)}>
        {!showMenu && <Text style={styles.buttonText}>Show menu</Text>}
        {showMenu && <Text style={styles.buttonText}>Home</Text>}
      </Pressable>
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
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 1
  }

});
