import { View, Text, StyleSheet } from "react-native"

import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"

import { GlobalStyles } from "../../constants/styles"

export default function ExpensesOutput(props) {
    return <View style={styles.container}>
        <ExpensesSummary expenses={props.expenses} periodName={props.expensesPeriod} />
        {props.expenses.length === 0 && <Text style={styles.infoText}>{props.fallbackText}</Text>}
        <ExpensesList expenses={props.expenses} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
    infoText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
        marginTop: 32
    }
});