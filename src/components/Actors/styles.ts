import styled from "styled-components/native";
import colors from "../../shared/styles/colors";
import { w } from "../../shared/styles/responsive";

export const Container = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})`
	flex: 1;
	align-text: center;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.Text`
	font-size: ${w(14)};
	color: ${colors.colors.text};
	width: ${w(50)};
	height: ${w(50)};
	text-align: center;
	margin-left: ${w(-16)};
`;

export const ImageContainer = styled.View`
  background-color: #fff;
  margin: ${w(16, 20, 10, 0)};
  border-radius: 99999;
  height: ${w(60)}
  width: ${w(60)}
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
	width: ${55};
	height: ${w(55)};
	border-radius: 99999;
`;
