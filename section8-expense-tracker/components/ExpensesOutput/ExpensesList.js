import { View, Text, FlatList } from "react-native"

import ExpenseItem from "./ExpenseItem"

function renderExpenseItem(itemData) {
    return <ExpenseItem
        id={itemData.item.id}
        description={itemData.item.description}
        date={itemData.item.date}
        amount={itemData.item.amount}
    />
}

export default function ExpensesList(props) {
    return <FlatList
        data={props.expenses}
        renderItem={renderExpenseItem}
        key={(item) => item.id}
    />
}
