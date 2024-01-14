import { View, Text, StyleSheet } from "react-native"

import Input from "./Input"

export default function ExpenseForm() {
    function amountChangedHandler() { }

    return <View>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputsRow}>
            <Input label="Amount" style={styles.flex1} textInputConfig={{
                placeholder: "$0.00",
                inputMode: "decimal",
                onChangeText: amountChangedHandler
            }} />
            <Input label="Date" style={styles.flex1} textInputConfig={{
                placeholder: "dd/mm/yyyy",
                maxLength: 10,
                onChangeText: () => { }
            }} />
        </View>
        <Input label="Description" textInputConfig={{
            multiline: true,
            autoCapitalize: "words"
        }} />
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
    }
});