import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
    expenses: [],
    setExpenses: (expenses) => { },
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { },
});

function expensesReducer(state, action) {
    switch (action.type) {
        case "ADD":
            
            return [action.payload, ...state];

        case "SET":
            const inverted = action.payload.reverse();
            return inverted;

        case "UPDATE":
            const toUpdateExpenseIndex = state.findIndex(expense => expense.id === action.payload.id);
            const toUpdateExpense = state[toUpdateExpenseIndex];
            const updatedItem = { ...toUpdateExpense, ...action.payload.expenseData };
            const updatedExpenses = [...state];
            updatedExpenses[toUpdateExpenseIndex] = updatedItem;
            return updatedExpenses;

        case "DELETE":
            return state.filter(expense => expense.id !== action.payload);

        default:
            return state;
    }
}

export default function ExpensesContextProvider(props) {
    const [expensesState, dispatch] = useReducer(expensesReducer, []);

    function addExpense(expenseData) {
        dispatch({ type: "ADD", payload: expenseData });
    }

    function setExpenses(expenses) {
        dispatch({ type: "SET", payload: expenses });
    }

    function deleteExpense(id) {
        dispatch({ type: "DELETE", payload: id });
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: "UPDATE", payload: { id, expenseData } });
    };

    const value = {
        expenses: expensesState,
        addExpense,
        setExpenses,
        deleteExpense,
        updateExpense
    }

    return <ExpensesContext.Provider value={value}>
        {props.children}
    </ExpensesContext.Provider>
}