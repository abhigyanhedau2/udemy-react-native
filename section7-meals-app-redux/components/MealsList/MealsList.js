import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

export default function MealsList(props) {
    function renderMealItem(itemData) {
        const mealItem = itemData.item;

        const mealItemProps = {
            id: mealItem.id,
            title: mealItem.title,
            affordability: mealItem.affordability,
            complexity: mealItem.complexity,
            imageUrl: mealItem.imageUrl,
            duration: mealItem.duration,
            ingredients: mealItem.ingredients,
            steps: mealItem.steps,
            isGlutenFree: mealItem.isGlutenFree,
            isVegan: mealItem.isVegan,
            isVegetarian: mealItem.isVegetarian,
            isLactoseFree: mealItem.isLactoseFree
        }

        return <MealItem {...mealItemProps} />
    }

    return <View style={styles.container}>
        <FlatList
            data={props.data}
            renderItem={renderMealItem}
            keyExtractor={(item) => item.id}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});