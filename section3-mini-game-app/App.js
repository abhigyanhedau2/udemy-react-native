import { useState } from 'react';
import { StyleSheet, ImageBackground, StatusBar as MainStatusBar, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGame from './screens/StartGame';
import Game from './screens/Game';
import GameOver from "./screens/GameOver";
import { StatusBar } from 'expo-status-bar';
import COLORS from './constants/colors';

export default function App() {
    const [userNumber, setUserNumber] = useState(null);
    const [gameIsOver, setGameIsOver] = useState(false);
    const [rounds, setRounds] = useState(1);

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
            <StatusBar style='inverted' />
            {!userNumber && <StartGame onNumberPick={pickedNumberHandler} />}
            {userNumber && !gameIsOver && <Game
                number={userNumber}
                setUserNumber={setUserNumber}
                onGameOver={setGameIsOver}
                onNextRound={incrementRound}
            />}
            {gameIsOver && <GameOver rounds={rounds} />}
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
