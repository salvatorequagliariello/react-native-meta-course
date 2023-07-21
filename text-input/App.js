import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import FeedbackForm from './components/FeedbackForm';
import FormText from './components/FormText';
import LittleHeader from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <LittleHeader />
      <FormText />
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
