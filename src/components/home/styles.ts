import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { Icons } from "../../components/icons";
import colors from "../../shared/styles/colors";
import { w, width } from "../../shared/styles/responsive";

export const SafeAreaView = styled.SafeAreaView`
	flex: 1;
	background: #fefeff;
`;

export const Container = styled.View`
	flex: 1;
	justify-content: flex-start;
	align-items: center;
`;

export const ScrollView = styled.ScrollView`
	flex: 1;
	min-height: ${Dimensions.get("screen").height}px;
	max-width: ${width};
	margin-bottom: 200px;
`;

export const ListContainer = styled.View`
	flex: 1;
	flex-direction: column;
	width: 100%;
`;

export const BottomSpace = styled.View`
	flex: 1;
	min-height: ${w(125)};
`;

export const SearchIcon = styled(Icons.Ionicons).attrs({
	name: "ios-search-outline",
	size: 22,
	color: colors.colors.text,
})`
	margin-left: ${w(10)};
`;
