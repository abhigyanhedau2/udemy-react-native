import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function GoalItem(props) {
    function deleteHandler() {
        props.onDeleteItem(props.goal.id);
    }

    return <Pressable
        style={({ pressed }) =>
            pressed
                ? [styles.goalItemPressable, styles.pressedItem]
                : styles.goalItemPressable
        }
    >
        {/* <Pressable
            style={styles.goalItemPressable}
            android_ripple={{ color: "#a5d8ff" }}
        > */}
        <Text style={styles.goalItemText}>{props.goal.text}</Text>
        <Pressable onPress={deleteHandler}>
            <View style={styles.deletePressableButton}>
                <Text style={styles.deleteText}>Delete</Text>
            </View>
        </Pressable>
    </Pressable>

}

const styles = StyleSheet.create({
    goalItemPressable: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#74c0fc",
        backgroundColor: "#e7f5ff",
        margin: 8,
        padding: 8,
        // borderRadius applied to <Text> renders in Android but not in iOS
        // Thus, can be applied to <View> that wraps <Text>
        borderRadius: 6,
        alignItems: "center",
    },
    pressedItem: {
        backgroundColor: "#d0ebff",
    },
    goalItemText: {
        color: "#1864ab",
        fontWeight: "bold"
    },
    deletePressableButton: {
        border: 1,
        backgroundColor: "#339af0",
        padding: 5,
        borderRadius: 5
    },
    deleteText: {
        color: "#fff",
    }
});