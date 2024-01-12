import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from './screens/Categories';
import MealsOverview from './screens/MealsOverview';
import MealDetail from './screens/MealDetail';

const Stack = createNativeStackNavigator();

export default function App() {
    return <>
        <StatusBar style='light' />
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: { backgroundColor: "#351401" },
                headerTintColor: "#fff",
                contentStyle: { backgroundColor: "#3f2f25" }
            }}>
                {/* name = name to refer to that component, component = component pointer */}
                <Stack.Screen
                    name="MealsCategories"
                    component={Categories}
                    options={{ title: "All Categories" }}
                />
                <Stack.Screen
                    name="MealsOverview"
                    component={MealsOverview}
                // options={({ route }) => {
                //     const categoryId = route.params.categoryId;
                //     return {
                //         title: categoryId
                //     }
                // }}
                />
                <Stack.Screen
                    name="MealDetail"
                    component={MealDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </>;
}

const styles = StyleSheet.create({
    container: {

    },
});
