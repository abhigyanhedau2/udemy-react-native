import { Text, StyleSheet } from "react-native";

export default function Subtitle(props) {
    return <Text style={styles.subtitle}>{props.children}</Text>
}

const styles = StyleSheet.create({
    subtitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 4,
        marginHorizontal: 12,
        padding: 6,
        textAlign: "center",
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2
    }
});