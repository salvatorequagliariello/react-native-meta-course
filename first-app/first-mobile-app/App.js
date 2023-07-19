import { View, Text } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";


export default function App() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <LittleLemonHeader />
      <Text style={{fontWeight: 700, fontSize: 30}}>
        Ciao
      </Text>
    </View>
  )
}
