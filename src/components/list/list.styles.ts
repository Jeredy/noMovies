import styled from "styled-components/native";
import colors from "../../shared/styles/colors";
import { w, ww } from "../../shared/styles/responsive";

export const Container = styled.View`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: ${ww(20)}px;
`;

export const TitleContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: ${w(11, 18, 15, 18)};
`;

export const Title = styled.Text`
	font-weight: 600;
    color: ${colors.colors.text}
	font-size: ${w(18)};
`;

export const SubTitle = styled.Text`
	font-size: ${w(14)};
	font-weight: 400;
	color: ${colors.colors.primary};
`;

export const Touchable = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})``;

export const CardContainer = styled.View`
	display: flex;
	align-items: center;
	min-width: 100%;
`;
