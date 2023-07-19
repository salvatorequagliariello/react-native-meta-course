import { View, Text } from "react-native";


const MainContent = () => {
    return (
        <View style={{padding: 30}}>
            <Text style={{fontWeight:"bold", fontSize: 28, textAlign: "center", color: "#F4CE14"}}>
                Welcome to
            </Text>
            <Text style={{fontWeight:"bold", fontSize: 36, textAlign: "center", color: "#F4CE14"}}>
                Little Lemon
            </Text>
            <Text style={{textAlign:"center", color: "white", fontWeight: 200, fontSize: 24, marginTop: 30, letterSpacing: 1.5}}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a livelyu but casual environment. We would love to hear more about your experience with us!
            </Text>
        </View>
    )
}

export default MainContent;