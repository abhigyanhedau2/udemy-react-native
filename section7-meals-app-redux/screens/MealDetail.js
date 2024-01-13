import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { addFavorite, removeFavorite } from "../store/redux/favorites";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

export default function MealDetail(props) {
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch()

    const mealId = props.route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    const navigation = useNavigation();

    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) dispatch(removeFavorite({ id: mealId }));
        else dispatch(addFavorite({ id: mealId }));
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <IconButton
                icon={mealIsFavorite ? "heart" : "heart-outline"}
                color="#fff"
                onPress={changeFavoriteStatusHandler}
            />
        });
    }, [navigation, changeFavoriteStatusHandler]);

    return <ScrollView style={styles.container}>
        {/* When using a network image, i.e., image from the web, you need to set the width and the height explicitly using styles */}
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            textStyle={styles.detailText}
        />
        <View style={styles.outerListContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients} />
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
            </View>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 32
    },
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white",
    },
    detailText: {
        color: "white",
    },
    outerListContainer: {
        width: "100%",
        alignItems: "center",
    },
    listContainer: {
        maxWidth: "80%",
    },
});