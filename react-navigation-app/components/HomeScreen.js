import { View, Text, Image, StyleSheet, Pressable } from "react-native";

const HomeView = ({navigation}) => {
    return (
        <View style={styles.imgContainer}>
            <Image accessible={true} accessibilityLabel="Little Lemon Logo" style={styles.img} source={require("react-navigation-app/images/yh3S-4LcQXGO99idg4HpPg_92f701034da44942a42fee3e878fc1a1_LIttle-Lemon-Logo.png")} />
            <Text style={styles.para}>Little lemon is a charming neighborhood bistro thgat serves simple food and classic cocktails in a lively but casual environment.</Text>
            <Image accessible={true} accessibilityLabel="Little Lemon Logo" style={styles.imgBan} source={require("react-navigation-app/images/C_zXbtvtRoqAhOAfS1aZLw_b43e5a291d3644cc99795e9a6649f5f1_Picture2.png")} />
            <Image accessible={true} accessibilityLabel="Little Lemon Logo" style={styles.imgBan} source={require("react-navigation-app/images/CMxz5ZMJTD-FD2j3MaiqtQ_71e6c17baa6049dbb4d10e74773e8bf1_Picture1.png")} />
            <Image accessible={true} accessibilityLabel="Little Lemon Logo" style={styles.imgBan} source={require("react-navigation-app/images/juabwFNFT2GpR-CE1ArQQw_da2e465ed0ad4c8b80a2e9e5f558e3f1_Picture3.png")} />
            <Image accessible={true} accessibilityLabel="Little Lemon Logo" style={styles.imgBan} source={require("react-navigation-app/images/Wu4k7G8-R3eCGxuU_qTI_A_4e06c8dbd17d48c383cea585289bfaf1_Picture4.png")} />
            <Pressable style={styles.button} onPress={() => navigation.navigate("Menu")}><Text style={{color: "white"}}>View menu</Text></Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    imgContainer: {
        marginTop: 20,
        width: "100%",
        alignItems: "center",
        marginBottom: 20,
    },
    img: {
        height: 60,
        width: "90%",
        resizeMode: "contain"
    },
    para: {
        paddingHorizontal: 30,
        textAlign: "center",
        fontSize: 18,
        marginTop: 10,
    },
    imgBan: {
        marginTop: 10,
        width: "90%",
        height: 100
    },
    button: {
        alignSelf: "center",
        marginTop: 20,
        backgroundColor: "#333333",
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 15,
    }
})

export default HomeView;