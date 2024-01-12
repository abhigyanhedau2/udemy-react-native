import { View, FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem({ item, navigation }) {
    function pressHandler() {
        // we get this navigation object for every screen registered in the NavigationContainer for nvaigation
        navigation.navigate("MealsOverview", { categoryId: item.id });
    }

    return <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
    />
}

export default function Categories(props) {
    return <FlatList
        data={CATEGORIES}
        renderItem={(itemData) => renderCategoryItem({ ...itemData, navigation: props.navigation })}
        keyExtractor={(item) => item.id}
        numColumns={2}
    />
}

const styles = StyleSheet.create({});
