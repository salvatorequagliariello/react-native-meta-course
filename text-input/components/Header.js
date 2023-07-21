import { Text, View, StyleSheet } from "react-native";

const LittleHeader = () => {
    return (
        <View style={styles.textContainer}>
            <Text style={styles.textHeader}>Little Lemon</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 32,
        color: "white",
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: 200,
        letterSpacing: 2
    },
    textContainer: {
        backgroundColor: "#333333",
        paddingTop: 25,
        paddingBottom: 10,
        width: "100%",
        marginBottom: 20
    }
});

export default LittleHeader;