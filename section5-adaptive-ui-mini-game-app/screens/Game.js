import { useEffect, useState } from "react";
import { View, StyleSheet, StatusBar as MainStatusBar, Alert, FlatList, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/UI/Title";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import InstructionText from "../components/Game/InstructionText";
import GuessLogItem from "../components/Game/GuessLogItem";

let LOWER_BOUND = 1;
let UPPER_BOUND = 99;

export default function Game(props) {
    // upper bound is excluded due to Math.random() exludes upper boundary 1
    const [computersGuess, setComputersGuess] = useState(50);
    const [roundDetails, setRoundDetails] = useState([computersGuess]);

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        LOWER_BOUND = 1;
        UPPER_BOUND = 99;
    }, []);

    function resetGameHandler() {
        props.setUserNumber(null);
        props.setRounds(1);
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
        setRoundDetails(prev => [newComputersGuess, ...prev]);
        props.onNextRound();
    }

    let content = <>
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
                    <PrimaryButton onPress={nextGuessHandler.bind(null, "higher")}>
                        <Ionicons name="md-add" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>
        </Card>
    </>

    if (width > 500) {
        content = <>
            <View style={styles.buttonContainerWide}>
                <View style={styles.buttonContainer}>
                    {/* <PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>Lower</PrimaryButton> */}
                    <PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>
                        <Ionicons name="md-remove" size={24} color="white" />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={gameOverHandler}>Yes!</PrimaryButton>
                </View>
                <NumberContainer>{computersGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    {/* <PrimaryButton onPress={nextGuessHandler.bind(null, "higher")}>Higher</PrimaryButton> */}
                    <PrimaryButton onPress={nextGuessHandler.bind(null, "higher")}>
                        <Ionicons name="md-add" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>

        </>
    }

    return <View style={styles.screen}>
        <Title>My Guess</Title>
        {content}
        <View style={styles.listContainer}>
            {/* {roundDetails.map(roundGuess => <Text key={roundGuess}>{roundGuess}</Text>)} */}
            <FlatList
                data={roundDetails}
                renderItem={(itemData) => <GuessLogItem round={roundDetails.length - itemData.index} number={itemData.item} />}
                keyExtractor={(item) => item}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: MainStatusBar.currentHeight,
        alignItems: "center"
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 24,
        width: "80%"
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16
    },
    buttonContainerWide: {
        flexDirection: "row",
        alignItems: "center"
    }
});