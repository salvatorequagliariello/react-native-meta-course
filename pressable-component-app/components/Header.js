import { Text, View, StyleSheet, useColorScheme } from "react-native";

const LittleHeader = () => {
const color = useColorScheme();

    return (
        <View style={[styles.textContainer, color == "light" ? styles.light : styles.dark]}>
            <Text style={[styles.textHeader, color == "light" ? styles.light : styles.dark]}>Little Lemon</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 32,
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: 200,
        letterSpacing: 2
    },
    textContainer: {
        paddingTop: 40,
        paddingBottom: 10,
        width: "100%",
        marginBottom: 20
    },
    light: {
        backgroundColor: "white",
        color: "#333333"
    },
    dark: {
        backgroundColor: "black",
        color: "white"
    }
});

export default LittleHeader;