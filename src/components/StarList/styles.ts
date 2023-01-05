import styled from "styled-components/native";
import { w } from "../../shared/styles/responsive";

export const Container = styled.View<{ width: number }>`
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	width: ${({ width }) => w(width)};
`;
