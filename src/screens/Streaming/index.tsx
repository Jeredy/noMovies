import { useNavigation, useRoute } from "@react-navigation/native";
import * as React from "react";
import HorizontalListActors from "../../components/Actors/HorizontalList";
import Divider from "../../components/Divider";
import ShadowComponent from "../../components/Shadow";
import StarList, { StarWidth } from "../../components/StarList";
import { MoviesProps } from "../../shared/types/streaming";
import * as S from "./styles";

export type StreamingScreenProps = {
	id: number;
	name: string;
	image: string;
	video: string;
	duration: string;
	year: string;
	category: string;
	description: string;
};
const StreamingScreen = () => {
	const { goBack } = useNavigation();
	const { id, name, image, video, duration, year, category, description } =
		useRoute().params as StreamingScreenProps;
	return (
		<S.Container>
			<ShadowComponent
				height={9}
				/*eslint-disable*/
				styles={{ position: "static", background: "#fff" }}
				/*eslint-enable*/
			>
				<S.TitleContainer>
					<S.Touchable onPress={() => goBack()}>
						<S.GoBackIcon />
					</S.Touchable>
					<S.Title numberOfLines={1} isPageTitle>
						{name}
					</S.Title>
				</S.TitleContainer>
			</ShadowComponent>
			<S.ScrollView showsVerticalScrollIndicator={false}>
				<S.TopContainer>
					<S.ImageBackground
						source={{
							uri: image,
						}}
					/>
					<ShadowComponent>
						<S.Image
							source={{
								uri: image,
							}}
						/>
					</ShadowComponent>
				</S.TopContainer>
				<S.Title>Description</S.Title>
				<S.InfoContainer>
					<S.Box>
						<S.Description>Time</S.Description>
						<S.InfoTextBold>190 min</S.InfoTextBold>
					</S.Box>
					<S.Box>
						<S.Description>Category</S.Description>
						<S.InfoTextBold>Action</S.InfoTextBold>
					</S.Box>
					<S.Box>
						<S.Description>Year</S.Description>
						<S.InfoTextBold>2022</S.InfoTextBold>
					</S.Box>
				</S.InfoContainer>
				<Divider />
				<S.StarContainer>
					<StarList width={StarWidth.LARGE} />
				</S.StarContainer>
				<S.DescriptionContainer>
					<S.Description>{description}</S.Description>
				</S.DescriptionContainer>
				<Divider />
				<HorizontalListActors />
				<S.BottomSpace />
			</S.ScrollView>
		</S.Container>
	);
};

export default StreamingScreen;
