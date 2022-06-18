import styled from "styled-components/native";
import colors from "../../shared/styles/colors";
import { w } from "../../shared/styles/responsive";

export const Container = styled.View`
	flex: 1;
	max-height: ${w(100)};
	width: 100%;
`;

export const ItemContainer = styled.TouchableOpacity<{ selected: boolean }>`
	flex: 1;
	height: 70px;
	min-width: 60px;
	align-item: center;
	justify-content: center;
	padding: ${w(10, 15)};
	margin: ${w(0, 0, 6, 12)};
	background: #fff;
	border-width: ${w(1)};
	border-color: #dbe6e6;
	border-radius: 16px;
`;

export const ItemText = styled.Text<{ selected: boolean }>`
	align-self: center;
	color: ${({ selected }) =>
		selected ? colors.colors.primary : colors.colors.text};
`;

export const Title = styled.Text`
	font-weight: 600;
    color: ${colors.colors.text}
	font-size: 20;
	margin-left: ${w(15)};
	margin: ${w(15)};
`;
