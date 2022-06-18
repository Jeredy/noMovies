import styled from "styled-components/native";
import { Dimensions } from "react-native";
import colors from "../../../../styles/colors";

const width = Dimensions.get("window").width;

export const Container = styled.View`
	flex: 1;
	width: ${width - 40};
	align-items: center;
	justify-content: center;
`;

export const TextContainer = styled.View`
	flex: 0.3;
	width: ${width - 50};
`;

export const Title = styled.Text`
	font-weight: 800;
	font-size: 28px;
	margin-bottom: 10px;
	color: ${colors.colors.secondary}
	text-align: center;
`;
export const Description = styled.Text`
	font-weight: 800;
	font-size: 16px;
	margin-bottom: 10px;
	color: ${colors.colors.text};
	padding-horizontal: 44px;
	text-align: center;
`;

export const Image = styled.Image`
	flex: 0.7;
	width: ${width};
	resize-mode: contain;
	justify-content: center;
`;
