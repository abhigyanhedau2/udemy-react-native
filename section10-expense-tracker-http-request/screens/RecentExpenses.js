import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput"
import { ExpensesContext } from "../store/expenses-context"
import { useContext, useEffect, useState } from "react"
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

export default function RecentExpenses() {
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();

    const expensesContext = useContext(ExpensesContext);

    useEffect(() => {
        async function getExpenses() {
            setIsFetching(true);
            try {
                const expenses = await fetchExpenses();
                expensesContext.setExpenses(expenses);
            } catch (error) {
                setError(`Error fetching expenses: ${error.message}`);
            }
            setIsFetching(false);
        }

        getExpenses();
    }, []);

    function errorHandler() {
        setError(null);
    }

    if (error && !isFetching) return <ErrorOverlay message={error} onConfirm={errorHandler} />

    if (isFetching) return <LoadingOverlay />;

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
