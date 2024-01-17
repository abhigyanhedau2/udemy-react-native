import { View, Text, FlatList, StyleSheet } from "react-native"
import PlaceItem from "./PlaceItem"
import { Colors } from "../../constants/colors"

export default function PlacesList(props) {
    if (!props.places || !props.places.length) {
        return <View style={styles.fallbackContainer}>
            <Text style={styles.fallbackText}>No places added yet.</Text>
        </View>
    }

    return <FlatList
        style={styles.list}
        data={props.places}
        renderItem={(itemData) => <PlaceItem place={itemData.item} />}
        keyExtractor={(item) => item.id}
    />
}

const styles = StyleSheet.create({
    list: {
        margin: 24
    },
    fallbackContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    fallbackText: {
        fontSize: 16,
        color: Colors.primary200
    }
});