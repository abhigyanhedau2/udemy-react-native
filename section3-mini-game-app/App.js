import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGame from './screens/StartGame';

export default function App() {
    return <LinearGradient
        colors={["#72063c", "#ddb52f"]}
        style={styles.appContainer}
    >
        <ImageBackground
            style={styles.appContainer}
            source={require("./assets/images/background.png")}
            resizeMode='cover'
            imageStyle={styles.imageBackground}
        >
            <StartGame />
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
