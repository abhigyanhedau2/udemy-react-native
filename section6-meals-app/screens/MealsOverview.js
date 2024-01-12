import { StyleSheet, View, Text } from "react-native";
// import { useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";

export default function MealsOverview(props) {
    // we get a route prop for every screen registered in the NavigationContainer for nvaigation
    // route contains a key params that contains any additional params that we might've passed in the
    // navigation.navigate() method
    const categoryId = props.route.params.categoryId;

    // Alternatively, we could also use the useRoute hook to get hold of the route object
    // const route = useRoute();

    return <View style={styles.container}>
        <Text>Meals Overview Screen - {categoryId}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});