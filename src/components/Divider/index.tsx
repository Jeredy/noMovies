import React from "react";
import { View } from "react-native";
import { ww } from "../../shared/styles/responsive";

type DividerProps = {
	margin?: number;
};

const Divider: React.FC<DividerProps> = ({ margin = 15 }) => {
	return (
		<View
			/*eslint-disable */
			style={{
				width: "90%",
				borderColor: "#CFD4DA",
				borderBottomWidth: 1,
				marginVertical: ww(margin),
				alignSelf: "center",
			}}
			/*eslint-enable */
		/>
	);
};

export default Divider;
