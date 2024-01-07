import { StyleSheet, Text, View, FlatList, ScrollView, Pressable } from 'react-native';
import GoalItem from "./GoalItem";

export default function GoalsList(props) {
    return (
        // List of Goals
        <View style={styles.goalsContainer}>
            {/* <ScrollView>
                {props.goalsList.map(goal => <View
                    key={goal.id}
                    style={styles.goalItem}
                >
                    <Text style={styles.goalItemText}>{goal.text}</Text>
                </View>)}
            </ScrollView> */}
            <FlatList
                data={props.goalsList}
                renderItem={itemData => <GoalItem goal={itemData.item} onDeleteItem={props.onDeleteItem} />}
                keyExtractor={(item, index) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    goalsContainer: {
        flex: 6
    }
});
