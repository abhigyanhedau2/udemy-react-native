import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function closeModalHandler() {
        setEnteredGoalText('');
        props.onClose();
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        closeModalHandler();
    }

    return (
        // Input area for goals
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require("../assets/images/goal.png")} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={closeModalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                </View>
            </ View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        // backgroundColor: "#e7f5ff"
        backgroundColor: "#1864ab"
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
        backgroundColor: "#e7f5ff"
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
});