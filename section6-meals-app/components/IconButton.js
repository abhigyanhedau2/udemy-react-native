import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton(props) {
    return <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={props.onPress}>
        <Ionicons name={props.icon} size={24} color={props.color} />
    </Pressable>
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
    }
});