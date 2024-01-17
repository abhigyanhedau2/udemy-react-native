import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

export default function OutlinedButton(props) {
    return <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={props.onPress}>
        <Ionicons style={styles.icon} name={props.icon} size={18} color={Colors.primary500} />
        <Text style={styles.text}>{props.children}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        margin: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primary500,
    },
    pressed: {
        opacity: 0.75
    },
    icon: {
        marginRight: 6
    },
    text: {
        color: Colors.primary500
    },
});