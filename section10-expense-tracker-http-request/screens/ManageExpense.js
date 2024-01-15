import { useContext, useLayoutEffect, useState } from "react"
import { View, StyleSheet } from "react-native"
import IconButton from "../components/UI/IconButton"
import { GlobalStyles } from "../constants/styles"
import { ExpensesContext } from "../store/expenses-context"
import ExpenseForm from "../components/ManageExpense/ExpenseForm"
import { storeExpense, updateExpense, deleteExpense } from "../util/http"
import LoadingOverlay from "../components/UI/LoadingOverlay"

export default function ManageExpense(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const expensesContext = useContext(ExpensesContext);

    const { mode, id } = props.route.params;
    const isEditing = mode === "edit";

    const { navigation } = props;

    const selectedExpense = expensesContext.expenses.find(expense => expense.id === id);

    useLayoutEffect(() => {
        navigation.setOptions({ title: isEditing ? "Edit Expense" : "Add Expense" });
    }, [navigation, mode]);

    async function deleteExpenseHandler() {
        setIsLoading(true);
        try {
            expensesContext.deleteExpense(id);
            await deleteExpense(id);
            navigation.goBack();
        } catch (error) {
            setError(`Error fetching expenses: ${error.message}`);
        }

        setIsLoading(false);
    }

    function errorHandler() {
        setError(null);
    }

    if (error && !isFetching) return <ErrorOverlay message={error} onConfirm={errorHandler} />

    function cancelHandler() {
        navigation.goBack();
    }

    async function confirmHandler(enteredExpense) {
        setIsLoading(true);

        if (isEditing) {
            expensesContext.updateExpense(id, enteredExpense);
            await updateExpense(id, enteredExpense);
        }
        else {
            const newExpenseId = await storeExpense(enteredExpense);
            expensesContext.addExpense({ ...enteredExpense, id: newExpenseId });
        }

        setIsLoading(false);
        navigation.goBack();
    }

    if (isLoading) return <LoadingOverlay />;

    return <View style={styles.container}>
        <ExpenseForm
            onCancel={cancelHandler}
            onSubmit={confirmHandler}
            submitButtonLabel={isEditing ? "Update" : "Add"}
            expense={selectedExpense}
        />
        {isEditing && <View style={styles.deleteContainer}>
            <IconButton
                name="trash"
                color={GlobalStyles.colors.error500}
                size={36}
                onPress={deleteExpenseHandler}
            />
        </View>}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center"
    },

});