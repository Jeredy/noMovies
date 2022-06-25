import * as React from "react";
import { useNavigation } from "@react-navigation/native";

import { BannerModel } from "../../../shared/models/banner";
import colors from "../../../shared/styles/colors";
import ShadowComponent from "../../Shadow";
import * as S from "./styles";

interface CardViewProps {
	item: BannerModel;
}

const CardView: React.FC<CardViewProps> = ({ item }) => {
	// const { navigate } = useNavigation();

	return (
		<ShadowComponent
			height={7}
			shadowOpacity={0.6}
			shadowColor={colors.colors.shadow}
		>
			<S.Container>
				<S.LinearGradientContainer
					colors={["#ffffff00", "#22222244", "#000000cc"]}
				></S.LinearGradientContainer>
				<S.Image
					source={{
						uri: item.image,
					}}
				/>
				<S.Title>{item.title}</S.Title>
				<S.Text numberOfLines={3}>{item.text}</S.Text>
			</S.Container>
		</ShadowComponent>
	);
};

export default CardView;
