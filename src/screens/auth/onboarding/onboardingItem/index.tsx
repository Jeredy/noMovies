import React from "react";
import { OnboardingItemProps } from "../../../../types/onboarding";

import { Container, Title, Description, Image, TextContainer } from "./styles";

const OnboardingItem: React.FC<OnboardingItemProps> = ({ data }) => {
	return (
		<Container>
			<Image source={data.image} />
			<TextContainer>
				<Title>{data.title}</Title>
				<Description>{data.description}</Description>
			</TextContainer>
		</Container>
	);
};

export default OnboardingItem;
