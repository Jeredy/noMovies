import { StreamingModel } from "../models/streaming";

export interface MoviesProps {
	map(
		arg0: (element: any, index: number) => JSX.Element,
	): import("react").ReactNode;
	title: string;
	data: StreamingModel[];
}
