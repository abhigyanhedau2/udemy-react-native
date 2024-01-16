import { View, Text, FlatList, StyleSheet } from "react-native"
import PlaceItem from "./PlaceItem"

export default function PlacesList(props) {
    if (!props.places || !props.places.length) {
        return <View style={styles.fallbackContainer}>
            <Text style={styles.fallbackText}>No places added yet.</Text>
        </View>
    }

    return <FlatList
        data={props.places}
        renderItem={(itemData) => <PlaceItem place={itemData.item} />}
        keyExtractor={(item) => item.id}
    />
}

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    fallbackText: {
        fontSize: 16
    }
});