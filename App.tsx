import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper'; // If using React Native Paper for UI
import { AuthProvider, useAuth } from './context/AuthContext'; // Use the updated AuthContext
import HomeScreen from './screens/HomeScreen'; // Main home screen
import LoginScreen from './screens/LoginScreen'; // Login screen
import RegisterScreen from './screens/RegisterScreen'; // Register screen

const Stack = createStackNavigator();

const App = () => {
    return (
        <AuthProvider>
            <PaperProvider>
                <NavigationContainer>
                    <MainNavigator />
                </NavigationContainer>
            </PaperProvider>
        </AuthProvider>
    );
};

const MainNavigator = () => {
    const { isSignedIn } = useAuth(); // Use the custom hook to get auth state

    return (
        <Stack.Navigator initialRouteName="Login">
            {isSignedIn ? (
                <Stack.Screen name="Home" component={HomeScreen} />
            ) : (
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                </>
            )}
        </Stack.Navigator>
    );
};

export default App;
