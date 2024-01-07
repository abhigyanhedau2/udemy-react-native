import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/Buttons/PrimaryButton";
import COLORS from '../constants/colors';

export default function StartGame(props) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
            Alert.alert(
                "Invalid Number!",
                "Enter a number between 1 and 99",
                [{ text: "Okay", style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }

        props.onNumberPick(chosenNumber);
    }

    return <View style={styles.inputContainer}>
        <View style={styles.textInputWrapper}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                value={enteredNumber}
                onChangeText={numberInputHandler}
            // Following props can also be used, although not needed here
            // autoCapitalize="none"
            // autoComplete={false}
            />
        </View>
        <View style={styles.buttonsWrapper}>
            <View style={styles.buttonWrapper}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonWrapper}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: COLORS.primary800,
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
        borderBottomColor: COLORS.secondary500,
        color: COLORS.secondary500,
        marginVertical: 8,
        fontWeight: "bold",
    }
});
