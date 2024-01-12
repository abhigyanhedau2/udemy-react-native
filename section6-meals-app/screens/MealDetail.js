import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

export default function MealDetail(props) {
    const mealId = props.route.params.mealId;

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    const navigation = useNavigation();

    function headerButtonPressHandler() {

    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <IconButton
                icon="heart"
                color="#fff"
                onPress={headerButtonPressHandler}
            />
        });
    }, [navigation, headerButtonPressHandler]);

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