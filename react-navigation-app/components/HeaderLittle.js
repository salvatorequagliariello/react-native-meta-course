import { Text, View, StyleSheet, useColorScheme, Pressable } from "react-native";

const LittleHeader = ({navigation}) => {
const color = useColorScheme();

    return (
        <View style={styles.textContainer}>
            <Text style={styles.textHeader}>Little Lemon</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 32,
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: 200,
        letterSpacing: 2,
        color: "white"
    },
    textContainer: {
        paddingTop: 40,
        paddingBottom: 10,
        width: "100%",
        marginBottom: 20,
        backgroundColor: "#333333",
    },
});

export default LittleHeader;