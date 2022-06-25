import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamsList } from "../shared/types/mainStack";
import StreamingScreen from "../screens/Streaming";
import HomeScreen from "../screens/home";

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Group>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Streaming" component={StreamingScreen} />
			</Stack.Group>
		</Stack.Navigator>
	);
};

export default HomeStack;
