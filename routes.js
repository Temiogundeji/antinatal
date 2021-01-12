import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen  from "./screens/RegisterScreen";
import HomeScreen from './screens/HomeScreen';
import AddAppointment from './screens/AddAppointment';
import Notifications from "./screens/Notifications";
import SendMessage from "./screens/SendMessage";
import CardHome from "./screens/CardHome";
import Appointments from './screens/Appointments';
import Profile from './screens/Profile';
import Videos from './screens/Videos';
import BMICalculator from "./screens/BMICalculator";
import DietAdvice from "./screens/DietAdvice";
import SplashScreen from "./screens/SplashScreen";

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
};
const screenForFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress
  }
});
const headerForFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0]
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity }
  };
};
const MyTransition = {
  gestureDirection: "horizontal",
  transitionSpec: {
    open: config,
    close: config
  },
  cardStyleInterpolator: screenForFade,
  headerStyleInterpolator: headerForFade
};

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#fff"
  },
  headerTintColor: "#003399",
  headerBackTitle: "Back"
};

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff"
          },
          headerTintColor: "#FF7F36",
          headerBackTitle: "Back",
          headerTitleStyle: {
            fontWeight: "normal"
          },
          gestureEnabled: true,
          ...MyTransition
        }}
      >
        {/* <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
        /> */}
        <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
        /> 
        
        <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
        />
         <Stack.Screen
        name="CardHome"
        component={CardHome}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Videos"
        component={Videos}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="Appointments"
        component={Appointments}
        options={{ headerShown: false }}
        />
         <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: true }}
        />
        <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: true }}
        />
        <Stack.Screen
         name="SendMessage"
         title="Send a message"
         component={SendMessage}
         options={{ headerShown: true }}
        />
        <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="BMICalculator"
        component={BMICalculator}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name="DietAdvice"
        component={DietAdvice}
        options={{ headerShown: true }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: true }}
          />
        <Stack.Screen
        name="AddAppointment"
        title="Create an appointment"
        component={AddAppointment}
        options={{ headerShown: true }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MainStackNavigator;