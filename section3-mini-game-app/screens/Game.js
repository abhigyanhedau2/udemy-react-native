import { View, Text, StyleSheet, StatusBar as MainStatusBar } from "react-native";

import Title from "../components/Title";

export default function Game() {
    return <View style={styles.screen}>
        <Title>My Guess</Title>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: MainStatusBar.currentHeight,
    }
});