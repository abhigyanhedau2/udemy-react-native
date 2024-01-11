import { StyleSheet, Text } from "react-native";

export default function InstructionText(props) {
    return <Text style={[styles.instructionText, props.style]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: "open-sans",
        fontSize: 24,
        color: COLORS.secondary500,
        textAlign: "center"
    }
});