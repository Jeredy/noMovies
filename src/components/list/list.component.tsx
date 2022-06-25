import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList } from "react-native";
import { MoviesProps } from "../../shared/types/streaming";
import CardComponent from "../card/card.component";
import * as S from "./list.styles";

const ListComponent: React.FC<MoviesProps> = ({ title, data }) => {
	const { navigate } = useNavigation();
	return (
		<S.Container>
			<S.TitleContainer>
				<S.Title>{title}</S.Title>
				<S.Touchable onPress={() => navigate("Streaming")}>
					<S.SubTitle>See All</S.SubTitle>
				</S.Touchable>
			</S.TitleContainer>
			<S.CardContainer>
				<FlatList
					data={data}
					keyExtractor={(_, index) => String(index)}
					renderItem={({ item }) => (
						<CardComponent
							id={item?.id}
							name={item?.name}
							image={item?.image}
						/>
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
					scrollEventThrottle={32}
				/>
			</S.CardContainer>
		</S.Container>
	);
};

export default ListComponent;
