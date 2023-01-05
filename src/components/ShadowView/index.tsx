import React from "react";
import { ColorValue } from "react-native";
import DropShadow from "react-native-drop-shadow";

type Props = {
	shadowColor?: ColorValue;
	shadowOffsetX?: number;
	shadowOffsetY?: number;
	shadowOpacity?: number;
	shadowRadius?: number;
	children: React.ReactElement;
};

const ShadowView: React.FC<Props> = ({ children, ...props }) => {
	const {
		shadowColor = "#000000",
		shadowOffsetX = 10,
		shadowOffsetY = 10,
		shadowOpacity = 0.1,
		shadowRadius = 10,
	} = props;

	return (
		<DropShadow
			/*eslint-disable */
			style={{
				zIndex: 9999,
				shadowColor: shadowColor,
				shadowOffset: {
					width: shadowOffsetX,
					height: shadowOffsetY,
				},
				shadowOpacity: shadowOpacity,
				shadowRadius: shadowRadius,
			}}
			/*eslint-enable */
		>
			{children}
		</DropShadow>
	);
};

export default ShadowView;
