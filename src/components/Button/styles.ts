import styled, { css } from "styled-components/native";
import colors from "../../shared/styles/colors";

import { w } from "../../shared/styles/responsive";

const primary = css<{ disabled?: boolean }>`
	background: ${({ disabled }) =>
		disabled ? "#CFD4DA" : colors.colors.primary};
`;

const secondary = css<{ disabled?: boolean }>`
	background: ${({ disabled }) =>
		disabled ? "#CFD4DA" : colors.colors.secondary};
`;

const ghost = css<{ disabled?: boolean }>`
	background: #fff;
	border-width: ${w(1)};
	border-color: #dbe6e6;
`;

const textPrimary = css`
	color: #ffffff;
`;

const textGhost = css`
	color: ${colors.colors.secondary};
`;

export const Container = styled.View<{ type: string }>`
	${({ type }) => (type === "primary" ? primary : ghost)}
	flex-direction: row;
	border-radius: ${w(10)};
	justify-content: space-around;
	align-items: center;
	height: ${w(50)};
`;

export const TitleText = styled.Text<{ type: string }>`
	${({ type }) => (type === "ghost" ? textGhost : textPrimary)}
	// font-family: 'Lato-Bold';
	font-size: ${w(16)};
`;

export const Loader = styled.ActivityIndicator``;
