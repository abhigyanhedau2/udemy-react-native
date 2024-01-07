import { useState } from 'react';
import { StyleSheet, ImageBackground, StatusBar as MainStatusBar, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGame from './screens/StartGame';
import Game from './screens/Game';
import { StatusBar } from 'expo-status-bar';
import COLORS from './constants/colors';

export default function App() {
    const [userNumber, setUserNumber] = useState(null);

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
    }

    return <LinearGradient
        colors={[COLORS.primary500, COLORS.secondary500]}
        style={styles.appContainer}
    >
        <ImageBackground
            style={styles.appContainer}
            source={require("./assets/images/background.png")}
            resizeMode='cover'
            imageStyle={styles.imageBackground}
        >
            <StatusBar style='auto' />
            {!userNumber && <StartGame onNumberPick={pickedNumberHandler} />}
            {userNumber && <Game number={userNumber} />}
        </ImageBackground>
    </LinearGradient>
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
    },
    imageBackground: {
        opacity: 0.25
    }
});
