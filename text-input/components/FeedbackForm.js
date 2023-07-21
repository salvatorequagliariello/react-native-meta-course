import { useState } from "react";
import { TextInput, View, Text, ScrollView, StyleSheet } from "react-native";

const FeedbackForm = () => {
    const [firstName, setFirstName] = useState(``);
    const [LastName, setLastName] = useState(``);
    const [message, setMessage] = useState(``);

    return (
        <View>
            <TextInput value={firstName} onChange={setFirstName} style={styles.name} placeholder="First name" />
            <TextInput placeholder="Last name" />
            <TextInput placeholder="Message" />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default FeedbackForm;