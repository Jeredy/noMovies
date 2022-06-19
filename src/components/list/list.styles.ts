import styled from "styled-components/native";
import colors from "../../shared/styles/colors";
import { w, ww } from "../../shared/styles/responsive";

export const Container = styled.View`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: ${ww(25)}px;
`;

export const Title = styled.Text`
	font-size: ${w(18)};
	font-weight: 600;
  color: ${colors.colors.text}
	padding: ${w(11, 0, 15, 18)};
`;

export const CardContainer = styled.View`
	display: flex;
	align-items: center;
	min-width: 100%;
`;
