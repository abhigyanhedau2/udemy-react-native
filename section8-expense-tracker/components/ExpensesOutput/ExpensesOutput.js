import { View, Text, StyleSheet } from "react-native"

import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"

import { GlobalStyles } from "../../constants/styles"

const DUMMY_EXPENSES = [
    { id: "e1", description: "Shoes", amount: 59.99, date: new Date("2023-12-19") },
    { id: "e2", description: "Groceries", amount: 35.75, date: new Date("2023-12-20") },
    { id: "e3", description: "Dinner", amount: 45.50, date: new Date("2023-12-21") },
    { id: "e4", description: "Movie Tickets", amount: 25.00, date: new Date("2023-12-22") },
    { id: "e5", description: "Laptop", amount: 199.99, date: new Date("2024-1-8") },
    { id: "e6", description: "Coffee", amount: 4.50, date: new Date("2024-1-6") },
    { id: "e7", description: "Books", amount: 30.25, date: new Date("2024-1-11") },
];


export default function ExpensesOutput(props) {
    return <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={props.expensesPeriod} />
        <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
});