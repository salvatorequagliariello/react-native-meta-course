import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import FeedbackForm from './components/FeedbackForm';
import FormText from './components/FormText';
import LittleHeader from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <LittleHeader />
          <FormText />
      <View style={{flex: 1, width: "90%", alignContent:"center", alignItems: "center", margin: 0, padding: 0}}>
        <KeyboardAvoidingView style={{width:"100%"}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <ScrollView style={{width:"100%"}} keyboardDismissMode="on-drag">
            <FeedbackForm />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
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
