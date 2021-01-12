import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/LoginScreen";
import registerScreen from "./screens/RegisterScreen";
import homeScreen from "./screens/HomeScreen";
import splashScreen from "./screens/SplashScreen";

const Stack = createStackNavigator();

function Navigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                options={{ headerShown: false }}
                name="LoginScreen"
                component={LoginScreen}
                />
                {/* <Stack.Screen
                options={{ headerShown: false }}
                name="homeScreen"
                component={homeScreen}
                />
                <Stack.Screen
                options={{ headerShown: false }}
                name="registerScreen"
                component={registerScreen}
                />
                <Stack.Screen
                options={{ headerShown: false }}
                name="splashScreen"
                component={splashScreen}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Navigator;