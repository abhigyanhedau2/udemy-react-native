import { Text, StyleSheet } from "react-native"

import COLORS from "../constants/colors";

export default function Title(props) {
    return <Text style={styles.title}>{props.children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: COLORS.secondary500,
        textAlign: "center",
        borderWidth: 2,
        borderColor: COLORS.secondary500,
        padding: 12
    }
});