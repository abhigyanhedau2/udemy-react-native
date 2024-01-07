import { View, Text, Pressable, StyleSheet } from "react-native";

import COLORS from "../../constants/colors";

export default function PrimaryButton(props) {
    return <View style={styles.outerContainer}>
        <Pressable
            style={({ pressed }) => pressed ? [styles.innerContainer, styles.pressed] : styles.innerContainer}
            onPress={props.onPress}
            android_ripple={{ color: COLORS.primary600 }}
        >
            <Text style={styles.text}>{props.children}</Text>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    innerContainer: {
        backgroundColor: COLORS.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2, // for android
        // for iOS
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    text: {
        color: "white",
        textAlign: "center"
    },
    pressed: {
        opacity: 0.75
    }
})