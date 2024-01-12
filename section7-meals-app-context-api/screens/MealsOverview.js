// import { useRoute } from "@react-navigation/native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

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

    return <MealsList data={displayedMeals} />;
}