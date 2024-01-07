import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/Buttons/PrimaryButton";

export default function StartGame() {
    return <View style={styles.inputContainer}>
        <View style={styles.textInputWrapper}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
            // Following props can also be used, although not needed here
            // autoCapitalize="none"
            // autoComplete={false}
            />
        </View>
        <View style={styles.buttonsWrapper}>
            <View style={styles.buttonWrapper}>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonWrapper}>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: "#39031e",
        borderRadius: 8,
        elevation: 4, // elevation is android-only property
        // shadow properties are iOS-only properties
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    textInputWrapper: {
        alignItems: "center",
    },
    buttonsWrapper: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    buttonWrapper: {
        flex: 1
    },
    numberInput: {
        width: 50,
        height: 50,
        textAlign: "center",
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: "#ddb52f",
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold",
    }
});
