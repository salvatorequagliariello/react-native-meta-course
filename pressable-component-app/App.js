import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import LittleHeader from './components/Header';
import MenuList from './components/MenuItems';

export default function App() {
  return (
    <View style={styles.container}>
      <LittleHeader />
      <MenuList />
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
});
