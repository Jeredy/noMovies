import styled from "styled-components/native";
import colors from "../../../shared/styles/colors";
import { w } from "../../../shared/styles/responsive";

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	justify-content: center;
	align-self: stretch;
	background-color: #fff;
`;

export const LogoImage = styled.Image.attrs({ resizeMode: "contain" })`
	width: ${w(210)};
	height: ${w(224)};
	margin-bottom: ${w(30)};
`;

export const TitleText = styled.Text`
	// font-family: "Montserrat-Bold";
	font-size: ${w(20)};
	color: #6f6f6e;
	text-align: center;
	margin-top: ${w(7)};
`;

export const DescriptionText = styled.Text`
	// font-family: "Lato-Regular";
	font-size: ${w(14)};
	color: #6f6f6e;
	text-align: center;
	margin: ${w(15, 12, 0)};
`;

export const SubtitleText = styled.Text`
	// font-family: "Lato-Bold";
	font-size: ${w(14)};
	color: #6f6f6e;
	text-align: center;
	margin: ${w(11, 12, 0)};
`;

export const Separator = styled.View`
	width: ${w(90)};
	border-bottom-width: ${w(1)};
	border-color: #adb5bd70;
	margin: ${w(30, 0)};
`;

export const LabelText = styled.Text`
	// font-family: "Lato-Bold";
	font-size: ${w(14)};
	color: #6f6f6e;
	text-align: center;
	margin-bottom: ${w(18)};
`;

export const InputRowContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-self: stretch;
	margin-bottom: ${w(9)};
`;

export const InputContainer = styled.View`
	margin-bottom: ${w(9)};
`;

export const CrmUfContainer = styled.View`
	width: ${w(116)};
`;

export const CrmContainer = styled.View`
	width: ${w(187)};
`;

export const ForgotPasswordContainer = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin: ${w(10, 0, 29, 0)};
`;

export const ForgotPasswordText = styled.Text`
	// font-family: "Lato-Regular";
	font-size: ${w(12)};
	color: #6f6f6e;
`;

export const ForgotPassawordButton = styled.TouchableOpacity``;

export const ForgotPasswordButtonText = styled.Text`
	// font-family: "Lato-Bold";
	font-size: ${w(12)};
	color: ${colors.colors.primary};
	text-decoration: underline;
	text-decoration-color: ${colors.colors.primary};
`;

export const ButtonContainer = styled.View`
	align-self: stretch;
	padding: ${w(0, 20)};
	margin-top: ${w(10)};
`;

export const ErrorText = styled.Text`
	// font-family: "Lato-Italic";
	font-size: ${w(12)};
	color: #d4145a;
	margin-bottom: ${w(12)};
	text-align: center;
`;

export const IconContainer = styled.TouchableOpacity``;
