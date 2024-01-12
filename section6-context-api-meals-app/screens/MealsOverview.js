import { StyleSheet, View, FlatList } from "react-native";
// import { useRoute } from "@react-navigation/native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

export default function MealsOverview(props) {
    // we get a route prop for every screen registered in the NavigationContainer for nvaigation
    // route contains a key params that contains any additional params that we might've passed in the
    // navigation.navigate() method
    const categoryId = props.route.params.categoryId;

    // Alternatively, we could also use the useRoute hook to get hold of the route object
    // const route = useRoute();

    // Get all the meals belonging to the category with categoryId
    const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0);

    const { navigation } = props;

    // useEffect exectues the function it has after the componenet is done loading
    // useLayoutEffect executes the function is has while the animation is running, while the component function execution
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [categoryId, navigation]);

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
            data={displayedMeals}
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