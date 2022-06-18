import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Foundation from "react-native-vector-icons/Foundation";
import EvilIcons from "react-native-vector-icons/EvilIcons";

Ionicons.loadFont();
MaterialCommunityIcons.loadFont();

export const Icons = {
	MaterialCommunityIcons,
	MaterialIcons,
	Ionicons,
	Feather,
	FontAwesome,
	FontAwesome5,
	AntDesign,
	Entypo,
	SimpleLineIcons,
	Octicons,
	Foundation,
	EvilIcons,
};

interface IconProps {
	type: any;
	name: string;
	color: string;
	size?: number;
	style?: string;
}

const Icon: React.FC<IconProps> = ({ type, name, color, size = 23, style }) => {
	const fontSize = 23;
	const Tag = type;

	return (
		<>
			{type && name && (
				<Tag name={name} size={size || fontSize} color={color} style={style} />
			)}
		</>
	);
};

export default Icon;
