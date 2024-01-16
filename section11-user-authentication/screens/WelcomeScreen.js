import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context';

function WelcomeScreen() {
    const authContext = useContext(AuthContext);
    const [fetchedMessage, setFetchedMessage] = useState("");
    const token = authContext.token;

    useEffect(() => {
        axios.get("https://expense-25e17-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=" + token)
            .then(response => setFetchedMessage(response.data));
    }, [token]);

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Welcome!</Text>
            <Text>You authenticated successfully!</Text>
            <Text>Your message - {fetchedMessage}</Text>
        </View>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});