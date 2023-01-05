import styled from "styled-components/native";
import { Dimensions } from "react-native";
import colors from "../../../shared/styles/colors";
import { w } from "../../../shared/styles/responsive";

export const Container = styled.View`
	flex: 1;
	width: ${Dimensions.get("screen").width};
	margin-bottom: ${w(12)};
`;

export const ContainerScroll = styled.FlatList`
	flex: 1;
	background-color: #fff;
`;

export const Title = styled.Text`
	font-weight: 700;
	color: ${colors.colors.text};
	font-size: ${w(22)};
	padding: ${w(16, 0, 0, 16)};
`;

export const Description = styled.Text`
	font-size: ${w(14)};
	color: ${colors.colors.text};
`;

export const TitleContainer = styled.View`
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	padding: ${w(6, 24, 0, 0)};
`;
