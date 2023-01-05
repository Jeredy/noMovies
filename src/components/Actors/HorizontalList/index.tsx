import React from "react";
import { Keyboard, TouchableOpacity } from "react-native";
import Actor1 from "../../../assets/images/actor.png";
import Actor2 from "../../../assets/images/actor2.png";
import Actor3 from "../../../assets/images/actor3.png";
import Actor4 from "../../../assets/images/actor4.png";
import Actor5 from "../../../assets/images/actor5.png";
import Actors from "../index";

import {
	ContainerScroll,
	Container,
	Title,
	TitleContainer,
	Description,
} from "./styles";
const data = [
	{
		id: "12341",
		image: Actor1,
		title: "Tom Hanks",
	},
	{
		id: "asdf1234",
		image: Actor4,
		title: "Leonardo DiCaprio",
	},
	{
		id: "adsf1234",
		image: Actor2,
		title: "Robert Downey Jr.",
	},
	{
		id: "adsf1234",
		image: Actor3,
		title: "Natalie Portman",
	},
	{
		id: "asdf1234",
		image: Actor5,
		title: "Dwayne Johnson",
	},
];
const HorizontalListActors = () => {
	return (
		<Container>
			<TitleContainer>
				<Title>Actors</Title>
				<TouchableOpacity activeOpacity={0.8}>
					<Description>See all</Description>
				</TouchableOpacity>
			</TitleContainer>
			<ContainerScroll
				data={data}
				renderItem={(data: any) => Actors(data.item)}
				keyExtractor={(item, index) => String(index)}
				onScrollBeginDrag={() => Keyboard.dismiss()}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 20 }}
			/>
		</Container>
	);
};

export default HorizontalListActors;
