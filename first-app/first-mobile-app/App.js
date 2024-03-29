import { View, Text, Button, ScrollView } from "react-native";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonHeader from "./components/LittleLemonHeader";
import MainContent from "./components/MainContent";
import MenuItems from "./components/MenuItems";

const items = ["Hummus", "Moutabal", "Falafel", "Marinated Olives", "Kofta", "Eggplant", "Salad", "lentil Burger"];

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center", backgroundColor: "#495E57", position: "relative"}}>
      <View style={{width: "100%"}}>
        <LittleLemonHeader />
      </View>
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={{paddingBottom: 100}}> 
            <MainContent />
            <MenuItems />
          </View>
        </ScrollView>
      </View>
      <View style={{position: "absolute", bottom: 0, width: "100%"}}>
        <LittleLemonFooter />
      </View>
    </View>
  )
}
 