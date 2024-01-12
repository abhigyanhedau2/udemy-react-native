import { StyleSheet, View, Text } from "react-native";

export default function MealDetails(props) {
    return <View style={styles.details}>
        <Text style={[styles.detailItem, props.textStyle]}>{props.duration} mins</Text>
        <Text style={[styles.detailItem, props.textStyle]}>{props.complexity.toUpperCase()}</Text>
        <Text style={[styles.detailItem, props.textStyle]}>{props.affordability.toUpperCase()}</Text>
    </View>
}

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 16
    }
});