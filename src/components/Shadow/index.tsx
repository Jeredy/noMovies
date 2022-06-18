import React from "react";
import DropShadow from "react-native-drop-shadow";

interface ShadowProps {
	shadowColor: string;
	children: React.ReactElement;
}

export const ShadowComponent: React.FC<ShadowProps> = ({
	children,
	shadowColor,
}) => {
	return (
		/*eslint-disable*/
		<DropShadow
			style={{
				shadowColor,
				shadowOffset: {
					width: 1,
					height: 2,
				},
				shadowOpacity: 0.4,
				shadowRadius: 4,
			}}
		>
			{children}
		</DropShadow>
		/*eslint-enable*/
	);
};

export default ShadowComponent;
