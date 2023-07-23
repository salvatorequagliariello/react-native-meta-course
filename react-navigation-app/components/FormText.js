import { Text, View, StyleSheet } from "react-native";

const FormText = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleOne}>Welcome to</Text>
            <Text style={styles.titletwo}>Little Lemon</Text>
            <Text style={styles.paragraph}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classsic cocktails in a
                lively but casual environment. We would love to hear your experience with us!
            </Text>
            <Text style={styles.titleThree}>Login to continue</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    titleOne: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: 600,
        color: "#333333"
    },
    titletwo: {
        fontSize: 28,
        textAlign: "center",
        fontWeight: 300,
        color: "#333333",
        textTransform: "uppercase",
        letterSpacing: 2
    },
    paragraph: {
        color: "#333333",
        fontWeight: 300,
        textAlign: "center",
        paddingHorizontal: 20,
        fontSize: 17
    },
    titleThree: {
        textAlign: "center",
        marginTop: 50,
        fontSize: 20,
        fontWeight: 700
    }
});

export default FormText;

