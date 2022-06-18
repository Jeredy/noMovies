import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import { w, ww } from "../../../shared/styles/responsive";

export const Container = styled.View`
	backgroundcolor: #fff;
	border-radius: 16;
	height: 200;
	padding: 20px;
	margin-top: 10;
	justify-content: flex-end;
	position: relative;
`;

export const LinearGradientContainer = styled(LinearGradient)`
	flex: 1;
	position: absolute;
	width: ${ww(320)};
	height: 200px;
	z-index: 2;
	border-radius: 16px;
`;

export const Image = styled.Image`
	width: ${w(320)};
	height: 200px;
	position: absolute;
	border-radius: 16px;
	zindex: 1;
`;

export const Title = styled.Text`
	font-size: 30px;
	z-index: 3;
	color: #fff;
	letter-spacing: 0.5;
`;
export const Text = styled.Text`
	z-index: 3;
	color: #ffffffee;
`;
