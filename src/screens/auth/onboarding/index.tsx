import React from "react";
import { FlatList, Animated } from "react-native";

import { onboardingData } from "../../../constants/onboarding";
import OnboardingItem from "./onboardingItem";

import * as S from "./styles";
import Colors from "../../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/Button";
import PaginationComponent from "../../../components/Pagination";
import ShadowComponent from "../../../components/Shadow";

const OnboardingScreen: React.FC = () => {
	const [currentIndex, setCurrentIndex] = React.useState(0);
	const scrollX = React.useRef(new Animated.Value(0)).current;
	const { navigate } = useNavigation();

	const slidesRef = React.useRef<any>(null);

	const viablewItemsChanged = React.useRef(({ viewableItems }: any) => {
		setCurrentIndex(viewableItems?.[0].index);
	}).current;

	const viewConfig = React.useRef({
		viewAreaCoveragePercentThreshold: 50,
	}).current;

	const scrollTo = () => {
		if (currentIndex < onboardingData.length - 1) {
			return slidesRef?.current.scrollToIndex({ index: currentIndex + 1 });
		}

		navigate("SignIn");
	};

	return (
		<S.Container>
			<S.FlatListContainer>
				<FlatList
					data={onboardingData}
					keyExtractor={(item, index) => String(index)}
					renderItem={({ item }) => <OnboardingItem data={item} />}
					horizontal
					showsHorizontalScrollIndicator={false}
					pagingEnabled
					bounces={false}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { x: scrollX } } }],
						{
							useNativeDriver: false,
						},
					)}
					scrollEventThrottle={32}
					onViewableItemsChanged={viablewItemsChanged}
					viewabilityConfig={viewConfig}
					ref={slidesRef}
				/>
			</S.FlatListContainer>
			<PaginationComponent
				carouselItemsLength={onboardingData.length}
				activeSlide={currentIndex}
			/>
			<S.ButtonContainer>
				<S.ButtonSkipContainer>
					<Button
						title="Skip"
						type="ghost"
						onPress={() => navigate("SignIn")}
					/>
				</S.ButtonSkipContainer>
				<S.ButtonNextContainer>
					<ShadowComponent shadowColor={Colors.colors.primary!}>
						<Button title="Next" type="primary" onPress={scrollTo} />
					</ShadowComponent>
				</S.ButtonNextContainer>
			</S.ButtonContainer>
		</S.Container>
	);
};

export default OnboardingScreen;
