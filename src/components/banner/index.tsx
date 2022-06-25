import * as React from "react";
import Carousel from "react-native-snap-carousel";

import { bannerItems } from "../../mockup/banner";
import { BannerModel } from "../../shared/models/banner";
import { ww, width } from "../../shared/styles/responsive";

import PaginationComponent from "../Pagination";
import CardView from "./CardView";

import * as S from "./styles";

const BannerComponent = () => {
	const [activeSlide, setActiveSlide] = React.useState(0);
	const [carouselItems, setCarouselItems] = React.useState<BannerModel[]>();

	React.useEffect(() => {
		setCarouselItems(bannerItems);
	}, []);

	if (!carouselItems) return <></>;

	return (
		<S.Container>
			<Carousel
				/*eslint-disable */
				data={carouselItems}
				renderItem={CardView}
				sliderWidth={width}
				itemWidth={ww(320)}
				inactiveSlideScale={0.95}
				inactiveSlideOpacity={0.5}
				// enableMomentum={true}
				activeSlideAlignment={"start"}
				containerCustomStyle={{ marginTop: 10, overflow: "visible" }}
				contentContainerCustomStyle={{ paddingVertical: 10 }}
				activeAnimationType={"spring"}
				// activeAnimationOptions={{
				// 	friction: 4,
				// 	tension: 40,
				// }}
				loop={true}
				autoplay={true}
				autoplayDelay={500}
				autoplayInterval={6000}
				onSnapToItem={(index) => setActiveSlide(index)}
				/*eslint-enable */
			/>
			<S.PaginationContainer>
				<PaginationComponent
					carouselItemsLength={carouselItems.length}
					activeSlide={activeSlide}
				/>
			</S.PaginationContainer>
		</S.Container>
	);
};

export default BannerComponent;
