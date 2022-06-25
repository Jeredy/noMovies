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
	min-height: ${Dimensions.get("screen").height}px;
	max-width: ${width};
	margin-bottom: 200px;
`;

export const TopContainer = styled.View`
	flex: 1;
	min-width: 100%;
	min-height: ${w(380)};
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
	width: ${w(220)};
	min-height: ${w(250)};
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

export const Title = styled.Text`
	font-weight: 600;
	color: ${colors.colors.text};
	font-size: ${w(18)};
`;

export const SearchIcon = styled(Icons.MaterialIcons).attrs({
	name: "arrow-back-ios",
	size: 22,
	color: colors.colors.text,
})``;

export const Touchable = styled.TouchableOpacity`
	margin-left: ${w(10)};
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${w(10)};
`;
