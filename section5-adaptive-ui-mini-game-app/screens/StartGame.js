import { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, StatusBar as MainStatusBar } from "react-native";

import Title from '../components/UI/Title';
import PrimaryButton from "../components/UI/PrimaryButton";
import COLORS from '../constants/colors';
import Card from '../components/UI/Card';
import InstructionText from '../components/Game/InstructionText';

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

    return <View style={styles.appContainer}>
        <Title>Guess My Number</Title>
        <Card>
            <View style={styles.textInputWrapper}>
                <InstructionText>Enter a Number</InstructionText>
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
        </Card>
    </View>
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        marginTop: MainStatusBar.currentHeight,
        paddingHorizontal: 24
    },
    textInputWrapper: {
        alignItems: "center",
    },
    buttonsWrapper: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 12
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
