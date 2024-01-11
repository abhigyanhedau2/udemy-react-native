import { View, Image, StyleSheet, Text, StatusBar as MainStatusBar } from "react-native";

import Title from "../components/UI/Title";
import COLORS from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";

export default function GameOver(props) {
    function resetGameHandler() {
        props.setUserNumber(null);
        props.setGameIsOver(false);
        props.setRounds(1);
    }

    return <View style={styles.screen}>
        <Title>Game Over!</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../assets/images/success.png")} />
        </View>
        <Text style={styles.summaryText}>It took me a total of <Text style={styles.highlight}>{props.rounds}</Text> round(s) to guess your number <Text style={styles.highlight}>{props.number}</Text>.</Text>
        <PrimaryButton onPress={resetGameHandler}>Start New Game</PrimaryButton>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: MainStatusBar.currentHeight,
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderColor: COLORS.primary800,
        borderWidth: 3,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24
    },
    highlight: {
        fontFamily: "open-sans-bold",
        color: COLORS.primary500
    }
});