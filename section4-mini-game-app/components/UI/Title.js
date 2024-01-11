import { Text, StyleSheet } from "react-native"

import COLORS from "../../constants/colors";

export default function Title(props) {
    return <Text style={styles.title}>{props.children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 24,
        color: COLORS.white,
        textAlign: "center",
        borderWidth: 2,
        borderColor: COLORS.white,
        padding: 12
    }
});