import React from "react";
import { Container } from "./styles";
import { StarEmptyIcon } from "../../assets/svg/StarEmpty";
import { StarFullIcon } from "../../assets/svg/StarFull";

export enum StarWidth {
	LARGE = 200,
	DEFAULT = 55,
}
type StarListProps = {
	width?: StarWidth;
};

const StarList = ({ width = StarWidth.DEFAULT }: StarListProps) => {
	return (
		<Container width={width}>
			<StarFullIcon size={width == StarWidth.LARGE ? 23 : 15} />
			<StarFullIcon size={width == StarWidth.LARGE ? 23 : 15} />
			<StarFullIcon size={width == StarWidth.LARGE ? 23 : 15} />
			<StarFullIcon size={width == StarWidth.LARGE ? 23 : 15} />
			<StarEmptyIcon size={width == StarWidth.LARGE ? 23 : 15} />
		</Container>
	);
};

export default StarList;
