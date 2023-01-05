import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Container, TitleText, Loader } from "./styles";

type Props = TouchableOpacityProps & {
	title: string;
	loading?: boolean;
	icon?: React.ReactNode;
	type?: "primary" | "secondary" | "ghost";
};

const Button: React.FC<Props> = (props) => {
	const {
		title,
		loading,
		icon,
		type = "primary",
		...touchableOpacityProps
	} = props;

	return (
		<TouchableOpacity {...touchableOpacityProps} activeOpacity={0.8}>
			<Container type={type}>
				<TitleText type={type}>{title}</TitleText>
				{loading && <Loader />}
				{icon}
			</Container>
		</TouchableOpacity>
	);
};

export default Button;
