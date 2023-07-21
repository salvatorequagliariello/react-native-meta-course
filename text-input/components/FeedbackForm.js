import { useState } from "react";
import { TextInput, View, Text, ScrollView, StyleSheet } from "react-native";

const FeedbackForm = () => {
    const [firstName, setFirstName] = useState(``);
    const [lastName, setLastName] = useState(``);
    const [message, setMessage] = useState(``);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>First name</Text>
                <TextInput value={firstName} onChange={setFirstName} style={styles.name} placeholder="First name" placeholderTextColor="#bfbdbd" />
            </View>

            <View>
                <Text style={styles.label}>Last name</Text>
                <TextInput value={lastName} onChange={setLastName} style={styles.name} placeholder="Last name"  placeholderTextColor="#bfbdbd" />
            </View>
            
            <View>
                <Text style={styles.label}>Message</Text>
                <TextInput value={message} onChange={setMessage} style={styles.message} placeholder="Message" multiline={true} placeholderTextColor="#bfbdbd" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 20
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
        placeholderTextColor: "red"
    },
    message: {
        marginTop: 5,
        borderColor: "#333333",
        borderWidth: 1,
        height: 100,
        padding: 10,
        textAlignVertical: "top",
    },
});

export default FeedbackForm;