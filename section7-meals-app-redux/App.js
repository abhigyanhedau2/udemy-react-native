import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from "@expo/vector-icons";

import Categories from './screens/Categories';
import Favorites from './screens/Favorites';
import MealsOverview from './screens/MealsOverview';
import MealDetail from './screens/MealDetail';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return <Drawer.Navigator screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "#fff",
        // contentStyle: { backgroundColor: "#3f2f25" } // for StackNavigator
        sceneContainerStyle: { backgroundColor: "#3f2f25" }, // for DrawerNavigator
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e2b497"
    }}>
        <Drawer.Screen
            name="Categories"
            component={Categories}
            options={{
                title: "All Categories",
                drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />
            }}
        />
        <Drawer.Screen
            name="Favorites"
            component={Favorites}
            options={{
                drawerIcon: ({ color, size }) => <Ionicons name="heart" color={color} size={size} />
            }}
        />
    </Drawer.Navigator>;
}

export default function App() {
    return <>
        <StatusBar style='light' />
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: { backgroundColor: "#351401" },
                headerTintColor: "#fff",
                contentStyle: { backgroundColor: "#3f2f25" } // for StackNavigator
                // sceneContainerStyle: { backgroundColor: "#3f2f25" } // for DrawerNavigator
            }}>
                {/* name = name to refer to that component, component = component pointer */}
                <Stack.Screen
                    name="Drawer"
                    component={DrawerNavigator}
                    options={{ headerShown: false }}
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
                    options={{
                        title: "About the Meal"
                        // headerRight: () => <Button title="Tap Me!" />
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </>;
}

const styles = StyleSheet.create({
    container: {

    },
});
