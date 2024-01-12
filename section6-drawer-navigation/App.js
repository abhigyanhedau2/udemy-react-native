import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
    return <NavigationContainer>
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#3c0a6b" },
            headerTintColor: { color: "#fff" },
            drawerActiveBackgroundColor: { color: "#f0e1ff" },
            drawerActiveTintColor: "#3c0a6b",
            // drawerStyle: { backgroundColor: "#ccc" },
        }}>
            <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} options={{
                // drawerLabel: "Welcome Screen",
                drawerIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
            }} />
            <Drawer.Screen name="UserScreen" component={UserScreen} options={{
                // drawerLabel: "User Screen",
                drawerIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
            }} />
        </Drawer.Navigator>
    </NavigationContainer>
}