import React from "react";
import ShadowView from "../ShadowView";
import { Container, ImageContainer, Image, Title } from "./styles";

type ActorsProps = {
	title: string;
	image: any;
};

const Actors = ({ title, image }: ActorsProps) => {
	return (
		<Container>
			<ShadowView
				shadowColor={"#DEE2E6"}
				shadowOffsetX={5}
				shadowOffsetY={4}
				shadowOpacity={1}
				shadowRadius={5}
			>
				<ImageContainer>
					<Image source={image} />
				</ImageContainer>
			</ShadowView>
			<Title numberOfLines={2}>{title}</Title>
		</Container>
	);
};

export default Actors;
