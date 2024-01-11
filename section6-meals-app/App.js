import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from './screens/Categories';

const Stack = createNativeStackNavigator();

export default function App() {
    return <>
        <StatusBar style='dark' />
        <NavigationContainer>
            <Stack.Navigator>
                {/* name = name to refer to that component, component = component pointer */}
                <Stack.Screen name="MealsCategories" component={Categories} />
            </Stack.Navigator>
        </NavigationContainer>
    </>;
}

const styles = StyleSheet.create({
    container: {

    },
});
