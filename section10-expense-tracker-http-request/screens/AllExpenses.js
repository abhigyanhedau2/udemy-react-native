import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput"
import { ExpensesContext } from "../store/expenses-context"
import { useContext, useEffect, useState } from "react"
import { fetchExpenses } from "../util/http"
import LoadingOverlay from "../components/UI/LoadingOverlay";


export default function AllExpenses() {
    const [isFetching, setIsFetching] = useState(true);

    const expensesContext = useContext(ExpensesContext);

    useEffect(() => {
        async function getExpenses() {
            setIsFetching(true);
            const expenses = await fetchExpenses();
            expensesContext.setExpenses(expenses);
            setIsFetching(false);
        }

        getExpenses();
    }, []);

    if (isFetching) return <LoadingOverlay />;

    return <ExpensesOutput
        expenses={expensesContext.expenses}
        expensesPeriod="Total"
        fallbackText="No Expenses Registered Yet."
    />
}
