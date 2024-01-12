import { View, FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem({ item, navigation }) {
    function pressHandler() {
        navigation.navigate("MealsOverview");
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
