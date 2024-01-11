import { useState } from 'react';
import { StyleSheet, ImageBackground, StatusBar as MainStatusBar, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from 'expo-status-bar';

import StartGame from './screens/StartGame';
import Game from './screens/Game';
import GameOver from "./screens/GameOver";
import COLORS from './constants/colors';

export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameIsOver] = useState(false);
    const [rounds, setRounds] = useState(1);

    const [fontsLoaded] = useFonts({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
    });

    if (!fontsLoaded) return <AppLoading />;

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
    }

    function incrementRound() {
        setRounds(prev => prev + 1);
    }

    return <LinearGradient
        colors={[COLORS.primary600, COLORS.secondary500]}
        style={styles.appContainer}
    >
        <ImageBackground
            style={styles.appContainer}
            source={require("./assets/images/background.png")}
            resizeMode='cover'
            imageStyle={styles.imageBackground}
        >
            <StatusBar style='light' />
            {!userNumber && <StartGame onNumberPick={pickedNumberHandler} />}
            {userNumber && !gameIsOver && <Game
                number={userNumber}
                setUserNumber={setUserNumber}
                onGameOver={setGameIsOver}
                onNextRound={incrementRound}
                setRounds={setRounds}
            />}
            {gameIsOver &&
                <GameOver
                    rounds={rounds}
                    number={userNumber}
                    setUserNumber={setUserNumber}
                    setGameIsOver={setGameIsOver}
                    setRounds={setRounds}
                />}
        </ImageBackground>
    </LinearGradient>
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    imageBackground: {
        opacity: 0.25
    }
});
