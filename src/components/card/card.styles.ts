import styled from "styled-components/native";
import colors from "../../shared/styles/colors";
import { w } from "../../shared/styles/responsive";

export const Container = styled.View`
	display: flex;
	flex-direction: column;
`;

export const CardContainer = styled.View`
	display: flex;
	width: ${w(125)};
	height: ${w(165)};
	border-radius: ${w(6)};
	margin-left: ${w(15)};
	margin-bottom: ${w(5.7)};
`;

export const Image = styled.Image`
	width: ${w(125)};
	height: ${w(165)};
	border-radius: ${w(6)};
`;

export const Text = styled.Text`
	font-size: ${w(14)};
	font-weight: 400;
	margin-top: ${w(3)};
	max-width: ${w(125)};
	margin-left: ${w(15)};
	color: ${colors.colors.text};
`;

export const Touchable = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})``;
