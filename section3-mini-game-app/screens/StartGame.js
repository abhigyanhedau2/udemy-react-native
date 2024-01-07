import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/Buttons/PrimaryButton";

export default function StartGame() {
    return <View style={styles.inputContainer}>
        <TextInput />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: "#72063c",
        borderRadius: 8,
        elevation: 4, // elevation is android-only property
        // shadow properties are iOS-only properties
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
});
