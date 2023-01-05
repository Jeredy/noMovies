import React from "react";
import Svg, { G, Path, Rect } from "react-native-svg";
import { ww } from "../../shared/styles/responsive";

type StarFullIconProps = {
	size: number;
};

export function StarEmptyIcon({ size }: StarFullIconProps) {
	return (
		<Svg width={ww(size)} height={ww(size)} viewBox="0 0 48 48" fill="#DEE2E6">
			<G id="SVGRepo_bgCarrier" stroke-width="0"></G>
			<G id="SVGRepo_iconCarrier">
				{/* <title>star-solid</title> */}
				<G id="Layer_2" data-name="Layer 2">
					<G id="invisible_box" data-name="invisible box">
						<Rect width="48" height="48" fill="none"></Rect>
					</G>
					<G id="icons_Q2" data-name="icons Q2">
						<Path d="M24,3a2.1,2.1,0,0,0-1.8,1.1L16.5,15.7,3.7,17.5A2.1,2.1,0,0,0,2.6,21l9.2,8.9L9.7,42.7A2,2,0,0,0,11.6,45l1-.2,11.4-6,11.4,6,1,.2a2,2,0,0,0,1.9-2.3L36.2,29.9,45.4,21a2.1,2.1,0,0,0-1.1-3.5L31.5,15.7,25.8,4.1A2.1,2.1,0,0,0,24,3Z"></Path>
					</G>
				</G>
			</G>
		</Svg>
	);
}
