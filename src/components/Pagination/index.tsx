import React from "react";
import { Pagination } from "react-native-snap-carousel";
import Colors from "../../styles/colors";

interface PaginationpProps {
	carouselItemsLength: number;
	activeSlide: number;
}

const PaginationComponent: React.FC<PaginationpProps> = ({
	carouselItemsLength,
	activeSlide,
}) => {
	return (
		/*eslint-disable*/
		<Pagination
			dotsLength={carouselItemsLength}
			activeDotIndex={activeSlide}
			containerStyle={{
				paddingVertical: 8,
			}}
			dotColor={Colors.colors.primary}
			dotStyle={{
				width: 8,
				height: 8,
				borderRadius: 4,
				marginHorizontal: 8,
			}}
			inactiveDotColor={"#a3a3a3"}
			inactiveDotOpacity={0.4}
			inactiveDotScale={0.6}
		/>
		/*eslint-disable*/
	);
};

export default PaginationComponent;
