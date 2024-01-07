import { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalsList from './components/GoalsList';

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [goalsList, setGoalsList] = useState([]);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function endAddGoalHandler() {
        setModalIsVisible(false);
    }

    function addGoalHandler(enteredGoalText) {
        setGoalsList(prev => [{
            text: enteredGoalText,
            id: Math.random().toString()
        }, ...prev]);
    }

    function deleteGoalHandler(goalId) {
        setGoalsList(prev => prev.filter(goal => goal.id !== goalId));
    }

    return (
        <View style={styles.appContainer}>
            {/* Button to add new goal */}
            <Button title='Add New Goal' color="#339af0" onPress={startAddGoalHandler} />
            {/* Input area for goals */}
            <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onClose={endAddGoalHandler} />
            {/* List of goals */}
            <GoalsList goalsList={goalsList} onDeleteItem={deleteGoalHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    }
});
