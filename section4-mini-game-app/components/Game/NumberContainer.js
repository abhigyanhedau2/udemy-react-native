import { View, Text, StyleSheet } from "react-native"

import COLORS from "../../constants/colors";

export default function NumberContainer(props) {
    return <View style={styles.container}>
        <Text style={styles.numberText}>{props.children}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: COLORS.secondary500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText: {
        color: COLORS.secondary500,
        fontSize: 36,
        fontFamily: "open-sans-bold"
    }
});