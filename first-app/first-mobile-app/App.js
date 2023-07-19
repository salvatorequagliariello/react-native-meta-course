import { View, Text } from "react-native";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonHeader from "./components/LittleLemonHeader";


export default function App() {
  return (
    <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center", backgroundColor: "#495E57", position: "relative"}}>
      <View style={{}}>
        <LittleLemonHeader />
      </View>
      <View style={{position: "absolute", bottom: 0, width: "100%"}}>
        <LittleLemonFooter />
      </View>
    </View>
  )
}
