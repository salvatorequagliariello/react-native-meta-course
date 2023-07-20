import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headertext}>Little Lemon</Text>
      </View>
      <MenuItems style={styles.menu} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
    alignItems: 'center',
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#F4CE14',
    width: "100%",
    paddingTop: 30,
    paddingBottom: 10
  },
  headertext: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 700
  },
  menu: {
    width: "100%",
  }
});
