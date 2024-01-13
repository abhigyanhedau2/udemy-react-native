import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons"

import ManageExpense from './screens/ManageExpense'
import RecentExpenses from './screens/RecentExpenses'
import AllExpenses from './screens/AllExpenses'
import IconButton from './components/UI/IconButton'

import { GlobalStyles } from "./constants/styles"
import ExpensesContextProvider from './store/expenses-context'

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomTabsNavigator() {
    return <BottomTabs.Navigator screenOptions={(props) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "#fff",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => <IconButton
            name="add"
            size={24}
            color={tintColor}
            onPress={() => props.navigation.navigate("ManageExpense", { mode: "add" })}
        />
    })}>
        <BottomTabs.Screen
            name="RecentExpenses"
            component={RecentExpenses}
            options={{
                title: "Recent Expenses",
                tabBarLabel: "Recent",
                tabBarIcon: ({ size, color }) => <Ionicons name="hourglass" color={color} size={size} />
            }}
        />
        <BottomTabs.Screen
            name="AllExpenses"
            component={AllExpenses}
            options={{
                title: "All Expenses",
                tabBarLabel: "All",
                tabBarIcon: ({ size, color }) => <Ionicons name="calendar" color={color} size={size} />
            }}
        />
    </BottomTabs.Navigator>
}

export default function App() {
    return <>
        <StatusBar style="light" />
        <ExpensesContextProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
                    headerTintColor: "#fff"
                }}>
                    {/* Following is the bottom tabs navigator that will switch between RecentExpenses and AllExpenses screen */}
                    <Stack.Screen name="ExpensesOverview" component={BottomTabsNavigator} options={{ headerShown: false }} />
                    {/* Following is the modal screen - ManageExpense - that will pop up when we need to add/edit expense */}
                    <Stack.Screen name="ManageExpense" component={ManageExpense} options={{ presentation: "modal" }} />
                </Stack.Navigator>
            </NavigationContainer>
        </ExpensesContextProvider>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
