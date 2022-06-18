import { Dimensions } from "react-native";

export const { width } = Dimensions.get("window");
const widthRatio = width / 375;

function responsive(m = 0) {
	return m * widthRatio;
}

export const w = (...args: number[]): string => {
	return args.map((m) => `${responsive(m)}px`).join(" ");
};

export const ww = (m: number): number => {
	return responsive(m);
};
