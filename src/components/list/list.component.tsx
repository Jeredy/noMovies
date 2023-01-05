import React from "react";
import { FlatList } from "react-native";
import { MoviesProps } from "../../shared/types/streaming";
import CardComponent from "../card/card.component";
import * as S from "./list.styles";

const ListComponent: React.FC<MoviesProps> = ({ title, data }) => {
	return (
		<S.Container>
			<S.TitleContainer>
				<S.Title>{title}</S.Title>
				<S.Touchable>
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
							video={item?.video}
							duration={item?.duration}
							description={item?.description}
							year={item?.year}
							category={item?.category}
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
