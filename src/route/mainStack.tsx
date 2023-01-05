import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";

import Icon, { Icons } from "../components/icons";
import Screens from "../screens";
import colors from "../shared/styles/colors";

const TabArr = [
	{
		route: "Home",
		label: "Home",
		type: Icons.AntDesign,
		activeIcon: "home",
		inActiveIcon: "home",
		component: Screens,
	},
	{
		route: "Feeds",
		label: "Like",
		type: Icons.Ionicons,
		activeIcon: "newspaper-outline",
		inActiveIcon: "newspaper-outline",
		component: Screens,
	},
	{
		route: "Like",
		label: "Like",
		type: Icons.AntDesign,
		activeIcon: "hearto",
		inActiveIcon: "hearto",
		component: Screens,
	},
	{
		route: "Profile",
		label: "Profile",
		type: Icons.Ionicons,
		activeIcon: "person-outline",
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
				0: { scale: 0.5 },
				1: { scale: 1.2 },
			});
		} else {
			viewRef.current.animate({
				0: { scale: 1.2 },
				1: { scale: 1 },
			});
		}
	}, [focused]);

	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={0.8}
			style={styles.touchable}
		>
			<Animatable.View ref={viewRef} duration={500} style={styles.container}>
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

export default function TabNavigation() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					position: "absolute",
					height: 65,
					elevation: 4,
					shadowColor: colors.colors.shadow,
					shadowOffset: { width: 2, height: -4 },
					shadowOpacity: 0.2,
					shadowRadius: 6,
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
	touchable: { flex: 1, marginBottom: -15 },
});
