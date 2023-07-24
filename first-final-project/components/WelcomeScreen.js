import { Text, View, Image, Pressable,  StyleSheet } from "react-native";


const WelcomeScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require("first-final-project/assets/little-lemon-logo.png")} /> 
            <Text style={styles.paragraph}>Little Lemon, your local Mediterranean Bistro.</Text>
            <Pressable onPress={() => navigation.navigate("News")} style={styles.button}><Text style={{color: "white", fontSize: 16, letterSpacing: 0.5}}>Newsletter</Text></Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    paragraph: {
        marginTop: 30,
        fontWeight: 300,
        fontSize: 19,
        textAlign: "center",
        paddingHorizontal: 40
    },
    img: {
        resizeMode: "center",
        height: "25%"
    },
    button: {
        backgroundColor: "#3E514B",
        width: "87%",
        alignItems: "center",
        paddingVertical: 10,
        position: "absolute",
        bottom: 20,
        borderRadius: 10
    }
});

export default WelcomeScreen;