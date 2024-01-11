import { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, StatusBar as MainStatusBar, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";

import Title from '../components/UI/Title';
import PrimaryButton from "../components/UI/PrimaryButton";
import COLORS from '../constants/colors';
import Card from '../components/UI/Card';
import InstructionText from '../components/Game/InstructionText';

export default function StartGame(props) {
    const [enteredNumber, setEnteredNumber] = useState('');

    // this hook will watch the device orientation and if the orientation changes,  
    // so does width and height and thus, we have updated values for width and height
    const { width, height } = useWindowDimensions();

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

    const marginTopDist = height < 430 ? 30 : MainStatusBar.currentHeight + 150;

    // behavior='position' will move the content out of the way of the keyboard
    return <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior='position'>
            <View style={[styles.appContainer, { marginTop: marginTopDist }]}>
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
        </KeyboardAvoidingView>
    </ScrollView>
}

// const deviceHeight = Dimensions.get("window").height; // not here

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    appContainer: {
        flex: 1,
        // marginTop: deviceHeight < 430 ? 30 : MainStatusBar.currentHeight + 150,
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
