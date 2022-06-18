import styled from "styled-components/native";
import colors from "../../../shared/styles/colors";

export const Container = styled.View`
	flex: 1;
	width: 100%;
	height: 100%;
	padding: 20px;
	background: ${colors.colors.background};
`;

export const FlatListContainer = styled.View`
	flex: 3;
`;

export const ButtonContainer = styled.View`
	flex: 1;
	max-height: 60px;
	flex-direction: row;
	margin-bottom: 16;
	margin-top: 16;
`;

export const ButtonSkipContainer = styled.View`
	flex: 1;
	padding-left: 4;
	padding-right: 4;
`;

export const ButtonNextContainer = styled(ButtonSkipContainer)`
	flex: 3;
`;

export const Text = styled.Text``;
