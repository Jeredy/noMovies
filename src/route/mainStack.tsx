import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import Icon, { Icons } from "../components/icons";
import Screens from "../screens";
import colors from "../shared/styles/colors";

const TabArr = [
	{
		route: "Home",
		label: "Home",
		type: Icons.Ionicons,
		activeIcon: "home",
		inActiveIcon: "home-outline",
		component: Screens,
	},
	{
		route: "Feeds",
		label: "Like",
		type: Icons.Ionicons,
		activeIcon: "newspaper",
		inActiveIcon: "newspaper-outline",
		component: Screens,
	},
	{
		route: "Like",
		label: "Like",
		type: Icons.MaterialCommunityIcons,
		activeIcon: "heart",
		inActiveIcon: "heart-outline",
		component: Screens,
	},
	{
		route: "Profile",
		label: "Profile",
		type: Icons.Ionicons,
		activeIcon: "ios-person",
		inActiveIcon: "person-outline",
		component: Screens,
	},
];

const Tab = createBottomTabNavigator();

const TabButton = (props: any) => {
	const { item, onPress, accessibilityState } = props;
	const focused = accessibilityState.selected;
	const viewRef = useRef<any>(null);

	useEffect(() => {
		if (focused) {
			viewRef.current.animate({
				0: { scale: 0.5, rotate: "0deg" },
				1: { scale: 1.2, rotate: "360deg" },
			});
		} else {
			viewRef.current.animate({
				0: { scale: 1.2, rotate: "360deg" },
				1: { scale: 1, rotate: "0deg" },
			});
		}
	}, [focused]);

	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={1}
			style={styles.touchable}
		>
			<Animatable.View ref={viewRef} duration={1000} style={styles.container}>
				<Icon
					type={item.type}
					name={focused ? item.activeIcon : item.inActiveIcon}
					color={focused ? colors.colors.primary : colors.colors.text}
					style={colors.colors.primary}
				/>
			</Animatable.View>
		</TouchableOpacity>
	);
};

export default function AnimTab1() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					position: "absolute",
					height: 60,
					bottom: 20,
					right: 20,
					left: 20,
					borderRadius: 16,
					elevation: 2,
					shadowColor: "#00000044",
					shadowOffset: { width: 1, height: 2 },
					shadowOpacity: 0.4,
					shadowRadius: 3,
				},
			}}
		>
			{TabArr.map((item, index) => {
				return (
					<Tab.Screen
						key={index}
						name={item.route}
						component={item.component}
						options={{
							tabBarShowLabel: false,
							tabBarButton: (props) => <TabButton {...props} item={item} />,
						}}
					/>
				);
			})}
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	touchable: { flex: 1, marginBottom: -30 },
});
