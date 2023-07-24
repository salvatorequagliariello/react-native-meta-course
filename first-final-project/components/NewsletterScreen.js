import { Text, TextInput, View, Image, Pressable, StyleSheet, Alert } from "react-native";
import { useState } from "react";

const emailvalidation = (email) => {
    const re = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i;
    if (re.test(email)) return true;

    return false;
};

const NewsletterScreen = () => {
    const [email, setEmail] = useState("");

    return (
        <View  style={styles.container}>
            <Image style={styles.img} source={require("/Users/salvatorequagliariello/Desktop/studio/react-native-meta-course/first-final-project/assets/little-lemon-logo-grey.png")} />
            <Text style={styles.paragraph}>Subscribe to our newsletter for our latest delicious recipes!</Text>
            <TextInput style={styles.input} keyboardType="email-address" placeholder="Type your email" value={email} onChangeText={value => setEmail(value)} />
            <Pressable onPress={() => {if (emailvalidation(email)) Alert.alert("Thanks for subscribing, stay tuned!")}} style={styles.button}><Text style={{color: "white", fontSize: 16, letterSpacing: 0.5}}>Subscribe</Text></Pressable>
        </View>
    );
};

const styles =  StyleSheet.create({
    container:  {
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 70
    },
    img: {
        height: 100,
        resizeMode: "contain"
    },
    input: {
        borderColor: "#40524C",
        borderWidth: 2,
        width: "86%",
        marginTop: 20,
        borderRadius:7,
        paddingVertical: 3,
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: "#40524C",
        border: "none",
        width: "86%",
        marginTop: 20,
        borderRadius:7,
        paddingVertical: 9,
        paddingHorizontal: 10,
        alignItems: "center"
    },
    paragraph: {
        fontSize: 20,
        fontWeight: 400,
        textAlign: "center",
        width: "91%",
        marginTop: 30,
        color: "#40524C"
    }
});

export default NewsletterScreen;