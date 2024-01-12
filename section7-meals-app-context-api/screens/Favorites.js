import { View, Text, StyleSheet } from "react-native"
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/Context/favorites-context";
import { MEALS } from "../data/dummy-data";

export default function Favorites() {
    const favoriteMealsContext = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter(meal => favoriteMealsContext.ids.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return <View style={styles.container}>
            <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>
    }

    return <MealsList data={favoriteMeals} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});