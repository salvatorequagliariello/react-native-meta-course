import { View, Text } from "react-native"

const LittleLemonHeader = () => {
    return (
        <View style={{backgroundColor: '#F4CE14'}}>
            <Text style={{paddingTop: 70, paddingBottom: 10, fontSize: 30, color: "black", textAlign: "center"}}>
                <Text style={{fontWeight: 800}}>Little Lemon </Text>
                Restaurant
            </Text>
        </View>
    )
};

export default LittleLemonHeader