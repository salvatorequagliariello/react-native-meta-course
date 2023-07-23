import { useState } from "react";
import { TextInput, View, Text, ScrollView, StyleSheet, Alert, Image, Pressable } from "react-native";

const FeedbackForm = ({navigation}) => {
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);

    return (
        <View style={styles.container}>
            <Image accessible={true} accessibilityLabel="Little Lemon Logo" style={styles.img} source={require("react-navigation-app/images/yh3S-4LcQXGO99idg4HpPg_92f701034da44942a42fee3e878fc1a1_LIttle-Lemon-Logo.png")} />
            <View >
                <Text style={styles.label}>Email</Text>
                <TextInput value={email} onChange={setEmail} style={styles.name} placeholder="Enter Email" placeholderTextColor="#bfbdbd" maxLength={20} keyboardType="email-address" />
            </View>

            <View>
                <Text style={styles.label}>Password</Text>
                <TextInput value={password} onChange={setPassword} style={styles.name} placeholder="Enter Password"  placeholderTextColor="#bfbdbd" secureTextEntry={true} maxLength={18} />
            </View>

            <Pressable style={styles.button} onPress={() => navigation.navigate("Welcome")}><Text style={{color: "white"}}>Login</Text></Pressable>
        
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        marginTop: 20,
        height: 60,
        width: "90%",
        resizeMode: "contain"
    },
    container: {
        marginTop: 10,
        paddingHorizontal: 30
    },
    label: {
        marginTop: 30,
        textAlign: "left",
        fontSize: 20
    },
    name: {
        borderBottomColor: "#333333",
        borderBottomWidth: 1,
        padding: 0,
        marginTop: 2,
    },
    button: {
        alignSelf: "center",
        marginTop: 30,
        backgroundColor: "#333333",
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 15,
    }
});

export default FeedbackForm;