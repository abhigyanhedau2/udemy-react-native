import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useContext } from 'react';
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();

// Screens for unauthenticated users
function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.primary500 },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: Colors.primary100 },
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
    );
}

// Screen for authenticated users
function AuthenticatedStack() {
    const authContext = useContext(AuthContext);

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.primary500 },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: Colors.primary100 },
            }}
        >
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
                headerRight: ({ tintColor }) => <IconButton
                    icon="exit"
                    color={tintColor}
                    size={24}
                    onPress={authContext.logout}
                />
            }} />
        </Stack.Navigator>
    );
}

function Navigation() {
    const authContext = useContext(AuthContext);

    return (
        <NavigationContainer>
            {!authContext.isAuthenticated && <AuthStack />}
            {authContext.isAuthenticated && <AuthenticatedStack />}
        </NavigationContainer>
    );
}

export default function App() {
    return (
        <AuthContextProvider>
            <StatusBar style="light" />
            <Navigation />
        </AuthContextProvider>
    );
}