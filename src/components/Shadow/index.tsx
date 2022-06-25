import React from "react";
import DropShadow from "react-native-drop-shadow";
import colors from "../../shared/styles/colors";

interface ShadowProps {
	shadowColor?: string;
	children: React.ReactElement;
	height?: number;
	shadowOpacity?: number;
	styles?: any;
}

export const ShadowComponent: React.FC<ShadowProps> = ({
	children,
	shadowColor = colors.colors.shadow,
	height = 2,
	shadowOpacity = 0.4,
	styles,
}) => {
	return (
		/*eslint-disable*/
		<DropShadow
			style={{
				shadowColor,
				shadowOffset: {
					width: 1,
					height,
				},
				shadowOpacity,
				shadowRadius: 4,
				...styles,
			}}
		>
			{children}
		</DropShadow>
		/*eslint-enable*/
	);
};

export default ShadowComponent;
