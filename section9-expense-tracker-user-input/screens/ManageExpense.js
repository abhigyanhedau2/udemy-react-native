import { useContext, useLayoutEffect } from "react"
import { View, StyleSheet } from "react-native"
import IconButton from "../components/UI/IconButton"
import { GlobalStyles } from "../constants/styles"
import { ExpensesContext } from "../store/expenses-context"
import ExpenseForm from "../components/ManageExpense/ExpenseForm"

export default function ManageExpense(props) {
    const expensesContext = useContext(ExpensesContext);

    const { mode, id } = props.route.params;
    const isEditing = mode === "edit";

    const { navigation } = props;

    const selectedExpense = expensesContext.expenses.find(expense => expense.id === id);

    useLayoutEffect(() => {
        navigation.setOptions({ title: isEditing ? "Edit Expense" : "Add Expense" });
    }, [navigation, mode]);

    function deleteExpenseHandler() {
        expensesContext.deleteExpense(id);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler(enteredExpense) {
        if (isEditing) expensesContext.updateExpense(id, enteredExpense);
        else expensesContext.addExpense(enteredExpense);

        navigation.goBack();
    }

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