import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    { id: "e1", description: "Shoes", amount: 59.99, date: new Date("2023-12-19") },
    { id: "e2", description: "Groceries", amount: 35.75, date: new Date("2023-12-20") },
    { id: "e3", description: "Dinner", amount: 45.50, date: new Date("2023-12-21") },
    { id: "e4", description: "Movie Tickets", amount: 25.00, date: new Date("2023-12-22") },
    { id: "e5", description: "Laptop", amount: 199.99, date: new Date("2024-1-8") },
    { id: "e6", description: "Coffee", amount: 4.50, date: new Date("2024-1-6") },
    { id: "e7", description: "Books", amount: 30.25, date: new Date("2024-1-11") },
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { },
});

function expensesReducer(state, action) {
    switch (action.type) {
        case "ADD":
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id }, ...state];

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
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData) {
        dispatch({ type: "ADD", payload: expenseData });
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
        deleteExpense,
        updateExpense
    }

    return <ExpensesContext.Provider value={value}>
        {props.children}
    </ExpensesContext.Provider>
}