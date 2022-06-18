import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamsList } from "../types/authStack";
import OnboardingScreen from "../screens/auth/onboarding";
import SignIn from "../screens/auth/signIn";
import SignUp from "../screens/auth/signUp";

const Stack = createNativeStackNavigator<AuthStackParamsList>();

const AuthStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Onboarding"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Group>
				<Stack.Screen name="Onboarding" component={OnboardingScreen} />
				<Stack.Screen name="SignIn" component={SignIn} />
				<Stack.Screen name="SignUp" component={SignUp} />
			</Stack.Group>
		</Stack.Navigator>
	);
};

export default AuthStack;
