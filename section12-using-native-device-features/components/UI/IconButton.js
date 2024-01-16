import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton(props) {
    return <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={props.onPress}>
        <Ionicons name={props.icon} size={props.size} color={props.color} />
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    pressed: {
        opacity: 0.75
    },
});