import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { w, ww } from "../../shared/styles/responsive";
import CheckSvg from "../../assets/icons/check.svg";
import ErrorSvg from "../../assets/icons/error.svg";
import colors from "../../shared/styles/colors";

export const Container = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})<{
	disabled?: boolean;
	error?: boolean;
}>`
	align-self: center;
	flex-direction: row;
	background: ${({ disabled }) =>
		disabled ? "#F8FAFB" : colors.colors.white.primary};
	padding: ${w(0, 20)};
	height: ${w(50)};
	border-radius: ${w(10)};
	border-color: ${({ error }) => (error ? "#D4145A" : colors.colors.border)};
	border-width: ${w(1)};
	align-items: center;
	justify-content: space-between;
	width: ${Dimensions.get("window").width - ww(40)}px;
`;

export const ContentContainer = styled.View`
	flex: 1;
`;

export const IconsContainer = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const Input = styled.TextInput`
	flex: 1;
	color: ${({ editable }) => (editable === false ? "#ADB5BD" : "#6F6F6E")};
	font-size: ${({ value }) => (value ? w(14) : w(12))};
	// font-family: ${({ value }) => (value ? "Lato-Bold" : "Lato-Regular")};
	padding: 0;
	padding-bottom: ${({ value }) => (value ? w(11) : 0)};
`;

export const Placeholder = styled.Text`
	// font-family: "Lato-Regular";
	margin-top: ${w(12)};
	margin-bottom: ${w(2)};
	font-size: ${w(10)};
	color: #adb5bd;
`;

export const ErrorMessage = styled.Text`
	font-size: ${w(10)};
	color: ${colors.colors.error};
	margin: ${w(3, 0, 0, 5)};
`;

export const Loader = styled.ActivityIndicator.attrs({
	size: "small",
	color: "#D4145A",
})`
	margin-left: ${w(16)};
`;

export const CheckIcon = styled(CheckSvg).attrs({
	height: w(16),
	width: w(16),
	stroke: "#ffffff",
})`
	margin-left: ${w(16)};
`;

export const ErrorIcon = styled(ErrorSvg).attrs({
	height: w(16),
	width: w(16),
})`
	margin-left: ${w(16)};
`;
