import { useNavigation } from "@react-navigation/native";
import React from "react";
import { CardProps } from "../../shared/types/card";
import * as S from "./card.styles";

const CardComponent: React.FC<CardProps> = ({
	id,
	name,
	image,
	video,
	duration,
	description,
	year,
	category,
}) => {
	const { navigate } = useNavigation();

	return (
		<S.Touchable
			onPress={() =>
				navigate("Streaming", {
					id: 0,
					name,
					image,
					video,
					duration,
					year,
					category,
					description,
				})
			}
		>
			<S.Container>
				<S.CardContainer>
					<S.Image source={{ uri: image }} />
				</S.CardContainer>
				<S.Text numberOfLines={1}>{name}</S.Text>
			</S.Container>
		</S.Touchable>
	);
};

export default CardComponent;
