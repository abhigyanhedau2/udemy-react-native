import { View, Text } from "react-native"
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput"
import { ExpensesContext } from "../store/expenses-context"
import { useContext } from "react"


export default function AllExpenses() {
    const expensesContext = useContext(ExpensesContext);

    return <ExpensesOutput
        expenses={expensesContext.expenses}
        expensesPeriod="Total"
        fallbackText="No Expenses Registered Yet."
    />
}
