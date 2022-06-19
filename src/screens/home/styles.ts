import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { w, width } from "../../shared/styles/responsive";

export const SafeAreaView = styled.SafeAreaView`
	flex: 1;
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
