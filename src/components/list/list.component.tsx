import React from "react";
import { FlatList } from "react-native";
import { MoviesProps } from "../../shared/types/streaming";
import CardComponent from "../card/card.component";
import { Container, Title, CardContainer } from "./list.styles";

const ListComponent: React.FC<MoviesProps> = ({ title, data }) => {
	return (
		<Container>
			<Title>{title}</Title>
			<CardContainer>
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
			</CardContainer>
		</Container>
	);
};

export default ListComponent;
