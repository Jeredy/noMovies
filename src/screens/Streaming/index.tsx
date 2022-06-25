import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import ShadowComponent from "../../components/Shadow";
import { MoviesProps } from "../../shared/types/streaming";
import * as S from "./styles";

const StreamingScreen = () => {
	const navigate = useNavigation();
	const [data, setData] = React.useState<MoviesProps>();
	const [search, setSearch] = React.useState("");

	return (
		<S.Container>
			<ShadowComponent
				height={9}
				/*eslint-disable*/
				styles={{ position: "static", background: "#fff" }}
				/*eslint-enable*/
			>
				<S.TitleContainer>
					<S.Touchable onPress={() => navigate.goBack()}>
						<S.SearchIcon />
					</S.Touchable>
					<S.Title numberOfLines={1}>Black Widow</S.Title>
				</S.TitleContainer>
			</ShadowComponent>
			<S.ScrollView showsVerticalScrollIndicator={false}>
				<S.TopContainer>
					<S.ImageBackground
						source={{
							uri: "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg",
						}}
					/>
					<ShadowComponent>
						<S.Image
							source={{
								uri: "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg",
							}}
						/>
					</ShadowComponent>
				</S.TopContainer>
				<S.BottomSpace />
			</S.ScrollView>
		</S.Container>
	);
};

export default StreamingScreen;
