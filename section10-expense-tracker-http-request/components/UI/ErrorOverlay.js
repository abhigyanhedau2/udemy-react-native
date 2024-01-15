import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Button from "./Button";


export default function ErrorOverlay(props) {
    return <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>An Error Occurred</Text>
        <Text style={styles.text}>{props.message}</Text>
        <Button onPress={props.onConfirm}>Okay</Button>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
    text: {
        textAlign: "center",
        marginBottom: 8,
        color: "#fff"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
});