import { StyleSheet } from 'react-native';
import StartGame from './screens/StartGame';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
    return <LinearGradient
        colors={["#72063c", "#ddb52f"]}
        style={styles.appContainer}
    >
        <StartGame />
    </LinearGradient>
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: "#ddb52f"
    }
});
