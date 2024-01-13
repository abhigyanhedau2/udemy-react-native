import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ManageExpense from './screens/ManageExpense'
import RecentExpenses from './screens/RecentExpenses'
import AllExpenses from './screens/AllExpenses'

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function BottomTabsNavigator() {
    return <BottomTabs.Navigator>
        <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
        <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
    </BottomTabs.Navigator>
}

export default function App() {
    return <>
        <StatusBar style="auto" />
        <NavigationContainer>
            <Stack.Navigator>
                {/* Following is the bottom tabs navigator that will switch between RecentExpenses and AllExpenses screen */}
                <Stack.Screen name="ExpensesOverview" component={BottomTabsNavigator} />
                {/* Following is the modal screen - ManageExpense - that will pop up when we need to add/edit expense */}
                <Stack.Screen name="ManageExpense" component={ManageExpense} />
            </Stack.Navigator>
        </NavigationContainer>
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
