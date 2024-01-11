import { useState } from "react";
import { View, Text, StyleSheet, StatusBar as MainStatusBar, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/UI/Title";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import InstructionText from "../components/Game/InstructionText";

let LOWER_BOUND = 1;
let UPPER_BOUND = 99;

export default function Game(props) {
    // upper bound is excluded due to Math.random() exludes upper boundary 1
    const [computersGuess, setComputersGuess] = useState(50);

    function resetGameHandler() {
        props.setUserNumber(null);
    }

    function gameOverHandler() {
        props.onGameOver(true);
    }

    // direction - "lower" or "higher"
    function nextGuessHandler(direction) {
        if (direction === "lower" && computersGuess < props.number) {
            Alert.alert(
                "Don't Lie!",
                `Your number is greater than or equal to ${computersGuess}`,
                [{ text: "Sorry", style: 'destructive', onPress: resetGameHandler }]
            );
            return;
        }

        if (direction === "higher" && computersGuess > props.number) {
            Alert.alert(
                "Don't Lie!",
                `Your number is less than or equal to ${computersGuess}`,
                [{ text: "Sorry", style: 'destructive', onPress: resetGameHandler }]
            );
            return;
        }

        if (direction === "lower") UPPER_BOUND = computersGuess - 1;
        else LOWER_BOUND = computersGuess + 1;

        const newComputersGuess = Math.floor((LOWER_BOUND + UPPER_BOUND) / 2);
        setComputersGuess(newComputersGuess);
        props.onNextRound();
    }

    return <View style={styles.screen}>
        <Title>My Guess</Title>
        <NumberContainer>{computersGuess}</NumberContainer>
        <Card>
            <InstructionText>Higher or Lower?</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    {/* <PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>Lower</PrimaryButton> */}
                    <PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>
                        <Ionicons name="md-remove" size={24} color="white" />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={gameOverHandler}>Yes!</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    {/* <PrimaryButton onPress={nextGuessHandler.bind(null, "higher")}>Higher</PrimaryButton> */}
                    <PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>
                        <Ionicons name="md-add" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>
        </Card>
        <View>
            {/* LOG ROUNDS */}
        </View>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: MainStatusBar.currentHeight,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 24
    },
    buttonContainer: {
        flex: 1
    },
});