import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput"
import { ExpensesContext } from "../store/expenses-context"
import { useContext } from "react"

export default function RecentExpenses() {
    const expensesContext = useContext(ExpensesContext);

    const today = new Date();
    const recentExpenses = expensesContext.expenses.filter(expense => {
        const date7DaysAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        return (expense.date >= date7DaysAgo) && (expense.date <= today);
    })

    return <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod="Last 7 Days"
        fallbackText="No Expenses Registered in the Last 7 Days."
    />
}
