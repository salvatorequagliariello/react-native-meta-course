import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import FeedbackForm from './components/FeedbackForm';
import LittleHeader from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <LittleHeader />
      <FeedbackForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});
