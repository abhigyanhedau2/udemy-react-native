import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export default function Button(props) {
    const isFlat = props.mode === "flat";

    return <View style={props.style}>
        <Pressable onPress={props.onPress} style={({ pressed }) => pressed && styles.pressed}>
            <View style={[styles.button, isFlat && styles.flat]}>
                <Text style={[styles.buttonText, isFlat && styles.flatText]}>{props.children}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary500
    },
    flat: {
        backgroundColor: "transparent"
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    },
    flatText: {
        color: GlobalStyles.colors.primary200
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4
    }
});