import { Text, StyleSheet, Platform } from "react-native"

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
        // borderWidth: Platform.OS === "android" ? 2 : 0,
        // borderWidth: Platform.select({
        //     ios: 0,
        //     android: 2
        // }),
        borderWidth: 2,
        borderColor: COLORS.white,
        padding: 12,
        maxWidth: "80%", // if more width is available, take 80% and not more than that
        width: 300
    }
});