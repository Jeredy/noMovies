import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";
import colors from "../../../shared/styles/colors";
import { w, ww } from "../../../shared/styles/responsive";

export const Container = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})`
	backgroundcolor: #fff;
	border-radius: 16;
	height: 200;
	padding: 20px;
	justify-content: flex-end;
	position: relative;
`;

export const OuterContainer = styled.View`
	flex: 1;
	padding: 20px;
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
