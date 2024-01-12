import { StyleSheet, View, Text } from "react-native";

import { MEALS } from "../data/dummy-data";

export default function MealsOverview(props) {
    // we get a route prop for every screen registered in the NavigationContainer for nvaigation
    // route contains a key params that contains any additional params that we might've passed in the
    // navigation.navigate() method
    const categoryId = props.route.params.categoryId;

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