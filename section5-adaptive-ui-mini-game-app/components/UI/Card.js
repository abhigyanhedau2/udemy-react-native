import { StyleSheet, View, Dimensions } from "react-native";

export default function Card(props) {
    return <View style={styles.card}>{props.children}</View>
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    card: {
        marginTop: deviceWidth < 380 ? 18 : 36,
        padding: 16,
        backgroundColor: COLORS.primary800,
        borderRadius: 8,
        elevation: 4, // elevation is android-only property
        // shadow properties are iOS-only properties
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
});