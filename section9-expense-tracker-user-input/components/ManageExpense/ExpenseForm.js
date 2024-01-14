import { useState } from "react"
import { View, Text, StyleSheet, Alert } from "react-native"

import Input from "./Input"
import Button from "../UI/Button"
import { GlobalStyles } from "../../constants/styles"

export default function ExpenseForm(props) {
    // !!props.expense = if we have a default value, it will yield true, else, it will yield false
    const initalState = {
        amount: {
            value: props.expense ? props.expense.amount.toString() : "",
            isValid: true
        },
        date: {
            value: props.expense ? props.expense.date.toISOString().slice(0, 10) : "",
            isValid: true
        },
        description: {
            value: props.expense ? props.expense.description : "",
            isValid: true
        }
    }

    const [inputs, setInputs] = useState(initalState);

    function inputChangedHandler(inputIdentifier, enteredValue) {
        // we're setting object property dynamically, we're setting the property name 
        // as the value stored in inputIdentifier and its value as enteredValue
        setInputs(prev => ({ ...prev, [inputIdentifier]: enteredValue }));
    }

    function submitHandler() {
        const enteredExpense = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        };

        inputs.amount.isValid = !isNaN(enteredExpense.amount) && enteredExpense.amount > 0;
        inputs.date.isValid = enteredExpense.date.toString() !== "Invalid Date";
        inputs.description.isValid = enteredExpense.description.trim().length > 0;

        if (inputs.amount.isValid && inputs.date.isValid && inputs.description.isValid) props.onSubmit(enteredExpense);
        else {
            setInputs(prev => ({
                amount: { value: prev.amount.value, isValid: inputs.amount.isValid },
                date: { value: prev.date.value, isValid: inputs.date.isValid },
                description: { value: prev.description.value, isValid: inputs.description.isValid }
            }))
            Alert.alert("Invalid Input", "Please check your input values");
        }
    }

    return <View>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputsRow}>
            <Input label="Amount" style={styles.flex1} textInputConfig={{
                placeholder: "$0.00",
                inputMode: "decimal",
                invalid: !inputs.amount.isValid,
                onChangeText: inputChangedHandler.bind(null, "amount"),
                value: inputs.amount.value
            }} />
            <Input label="Date" style={styles.flex1} textInputConfig={{
                placeholder: "yyyy-mm-dd",
                maxLength: 10,
                invalid: !inputs.date.isValid,
                onChangeText: inputChangedHandler.bind(null, "date"),
                value: inputs.date.value
            }} />
        </View>
        <Input label="Description" textInputConfig={{
            multiline: true,
            autoCapitalize: "words",
            onChangeText: inputChangedHandler.bind(null, "description"),
            invalid: !inputs.description.isValid,
            value: inputs.description.value
        }} />
        {(!inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid) && <Text style={styles.errorText}>Invalid Form Inputs</Text>}
        <View style={styles.buttonContainer}>
            <Button style={styles.button} mode="flat" onPress={props.onCancel}>Cancel</Button>
            <Button style={styles.button} onPress={submitHandler}>{props.submitButtonLabel}</Button>
        </View>
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginBottom: 24
    },
    inputsRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    flex1: {
        flex: 1
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    errorText: {
        textAlign: "center",
        color: GlobalStyles.colors.error500,
        margin: 8
    }
});