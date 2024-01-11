import { View, Text, StyleSheet, Dimensions } from "react-native";


import COLORS from "../../constants/colors";

export default function NumberContainer(props) {
    return <View style={styles.container}>
        <Text style={styles.numberText}>{props.children}</Text>
    </View>
}

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: COLORS.secondary500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText: {
        color: COLORS.secondary500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontFamily: "open-sans-bold"
    }
});