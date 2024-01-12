import { View, StyleSheet, Pressable, Text, Platform } from "react-native"

export default function CategoryGridTile(props) {
    return <View style={styles.gridItem}>
        <Pressable
            style={({ pressed }) => [
                styles.flex1,
                pressed ? styles.pressablePressed : null
            ]}
            onPress={props.onPress}
        >
            <View style={[styles.innerContainer, { backgroundColor: props.color }]}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    flex1: {
        flex: 1
    },
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        // android
        elevation: 4,
        // ios
        backgroundColor: "white", // need to add this line of code for shadow to be in action
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.select({
            android: "hidden"
        })
    },
    pressablePressed: {
        opacity: 0.75
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    }
});