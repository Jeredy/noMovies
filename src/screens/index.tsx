import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import Colors from "../shared/styles/colors";
import HomeScreen from "./home";
import ProfileScreen from "./Profile";

interface ColorScreenProps {
	route: any;
	navigation: any;
}

const Screens: React.FC<ColorScreenProps> = ({ route, navigation }) => {
	const viewRef = React.useRef<any>(null);

	const showScreen = () => {
		/* eslint-disable */
		switch (route.name) {
			case "Home": {
				return <HomeScreen />;
			}
			case "Profile": {
				return <ProfileScreen />;
			}
			default:
				return <HomeScreen />;
		}
		/* eslint-enable */
	};

	useEffect(() => {
		const unsubscribe = navigation.addListener("focus", () => {
			viewRef.current.animate({ 0: { opacity: 0.5 }, 1: { opacity: 1 } });
		});
		return () => unsubscribe;
	}, [navigation]);

	return (
		<View style={styles.container}>
			<Animatable.View
				ref={viewRef}
				easing={"ease-in-out"}
				style={styles.container}
			>
				{showScreen()}
			</Animatable.View>
		</View>
	);
};

export default Screens;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.colors.white.primary,
	},
});
