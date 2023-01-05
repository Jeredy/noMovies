import { Dimensions, Platform } from "react-native";
import styled from "styled-components/native";
import { Icons } from "../../components/icons";
import colors from "../../shared/styles/colors";
import { w, width } from "../../shared/styles/responsive";

export const Container = styled.View`
	flex: 1;
	justify-content: flex-start;
	align-items: center;
	background: #fefeff;
`;

export const ScrollView = styled.ScrollView`
	flex: 1;
	max-width: ${width};
	padding-bottom: ${w(580)};
`;

export const TopContainer = styled.View`
	flex: 1;
	min-width: 100%;
	height: ${w(300)};
	position: relative;
	align-items: center;
	justify-content: flex-end;
`;

export const BottomSpace = styled.View`
	flex: 1;
	min-height: ${w(125)};
`;

export const ImageBackground = styled.Image`
	flex: 1;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0.3;
`;

export const Image = styled.Image`
	flex: 0.7;
	width: ${w(200)};
	min-height: ${w(200)};
	justify-content: center;
	border-radius: ${w(6)};
`;

export const TitleContainer = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	min-width: 100%;
	margin-top: ${Platform.OS === "ios" ? w(50) : "0px"};
	padding-bottom: ${w(10)};
	background: #fff;
`;

export const StarContainer = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: ${w(60)};
`;

export const Title = styled.Text<{ isPageTitle?: boolean }>`
	font-weight: 700;
	color: ${colors.colors.text};
	font-size: ${({ isPageTitle }) => w(isPageTitle ? 18 : 22)};
	padding: ${({ isPageTitle }) => (isPageTitle ? w(0) : w(16, 0, 0, 16))};
`;

export const InfoContainer = styled.View`
	flex: 1;
	justify-content: space-between;
	flex-direction: row;
	margin-top: ${w(10)};
	padding: ${w(16)};
`;

export const InfoTextBold = styled.Text`
	font-weight: 700;
	font-size: ${w(16)};
	color: ${colors.colors.text};
	margin-top: ${w(6)};
`;

export const Description = styled.Text`
	font-weight: 400;
	color: ${colors.colors.text};
	font-size: ${w(15)};
`;

export const DescriptionContainer = styled.View`
	flex: 1;
	justify-content: flex-start;
	align-items: center;
	padding: ${w(16)};
`;
export const Box = styled.View`
	flex: 1;
`;

export const GoBackIcon = styled(Icons.MaterialIcons).attrs({
	name: "arrow-back-ios",
	size: 22,
	color: colors.colors.text,
})``;

export const Touchable = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})`
	margin-left: ${w(10)};
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${w(10)};
`;
