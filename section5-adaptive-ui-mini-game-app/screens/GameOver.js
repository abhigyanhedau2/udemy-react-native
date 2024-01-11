import { View, Image, StyleSheet, Text, StatusBar as MainStatusBar, useWindowDimensions, ScrollView } from "react-native";

import Title from "../components/UI/Title";
import COLORS from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";

export default function GameOver(props) {
    function resetGameHandler() {
        props.setUserNumber(null);
        props.setGameIsOver(false);
        props.setRounds(1);
    }

    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) imageSize = 150;

    if (height < 430) imageSize = 80;

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    return <ScrollView style={styles.flex1}>
        <View style={styles.screen}>
            <Title>Game Over!</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image style={styles.image} source={require("../assets/images/success.png")} />
            </View>
            <Text style={styles.summaryText}>It took me a total of <Text style={styles.highlight}>{props.rounds}</Text> round(s) to guess your number <Text style={styles.highlight}>{props.number}</Text>.</Text>
            <PrimaryButton onPress={resetGameHandler}>Start New Game</PrimaryButton>
        </View>
    </ScrollView>
}

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    flex1: {
        flex: 1
    },
    screen: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: MainStatusBar.currentHeight,
    },
    imageContainer: {
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        // borderRadius: deviceWidth < 380 ? 75 : 150,
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