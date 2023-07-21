import { useState } from "react";
import { TextInput, View, Text, ScrollView, StyleSheet, Alert } from "react-native";

const FeedbackForm = () => {
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput value={email} onChange={setEmail} style={styles.name} placeholder="Enter Email" placeholderTextColor="#bfbdbd" maxLength={20} keyboardType="email-address"
                onBlur={() => {if (email == "") Alert.alert("Please, fill the form!")}}/>
            </View>

            <View>
                <Text style={styles.label}>Password</Text>
                <TextInput value={password} onChange={setPassword} style={styles.name} placeholder="Enter Password"  placeholderTextColor="#bfbdbd" secureTextEntry={true} maxLength={18} />
            </View>
        
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 10
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
    }
});

export default FeedbackForm;