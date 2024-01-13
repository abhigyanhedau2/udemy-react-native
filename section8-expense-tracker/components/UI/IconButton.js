import { Pressable, View, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function IconButton(props) {
    return <Pressable onPress={props.onPress} style={({ pressed }) => pressed && styles.pressed}>
        <View style={styles.buttonContainer}>
            <Ionicons name={props.name} color={props.color} size={props.size} />
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75
    }
});