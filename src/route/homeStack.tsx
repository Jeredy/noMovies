import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamsList } from "../shared/types/mainStack";
import StreamingScreen from "../screens/Streaming";
import HomeScreen from "../screens/home";
import styled from "styled-components/native";
import { w, ww } from "../shared/styles/responsive";
import { Icons } from "../components/icons";

const Stack = createNativeStackNavigator<HomeStackParamsList>();

const HomeStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Group>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						headerLeft: () => <Title>Recipes</Title>,
						title: "",
						headerRight: () => (
							<MenuButton>
								<Icons.Feather name="menu" size={ww(24)} color={"black"} />
							</MenuButton>
						),
					}}
				/>
				<Stack.Screen name="Streaming" component={StreamingScreen} />
			</Stack.Group>
		</Stack.Navigator>
	);
};

export const Title = styled.Text`
	font-size: ${w(20)};
	color: black;
	padding-left: ${w(16)};
`;

export const MenuButton = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})`
	padding-right: ${w(16)};
`;

export default HomeStack;
