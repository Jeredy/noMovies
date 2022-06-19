import * as React from "react";
import { ScrollView } from "react-native";
import Banner from "../../components/banner";
import CategoriesListComponent from "../../components/Categories";
import ListComponent from "../../components/list/list.component";
import categories from "../../mockup/categories";
import { moviesData } from "../../mockup/movies";
import { MoviesProps } from "../../shared/types/streaming";
import * as S from "./styles";

const HomeScreen = () => {
	const [data, setData] = React.useState<MoviesProps>();

	React.useEffect(() => {
		const elementsData: any = [];

		categories.map((category) => {
			const innerData: any = [];

			moviesData?.forEach((streaming, index) => {
				if (streaming.category === category.id) {
					innerData.push(streaming);
				}
			});

			if (innerData.length) {
				elementsData.push({
					title: category.title,
					data: innerData,
				});
			}
		});

		setData(elementsData);
	}, []);

	if (!data) return <></>;

	return (
		<S.SafeAreaView>
			<S.Container>
				<S.ScrollView showsVerticalScrollIndicator={false}>
					<Banner />
					<CategoriesListComponent />
					<S.ListContainer>
						{data?.map((element: any, index: number) => (
							<ListComponent
								key={index}
								title={element.title}
								data={element.data}
								map={function (
									arg0: (element: any, index: number) => Element,
								): React.ReactNode {
									throw new Error("Function not implemented.");
								}}
							/>
						))}
					</S.ListContainer>
					<S.BottomSpace />
				</S.ScrollView>
			</S.Container>
		</S.SafeAreaView>
	);
};

export default HomeScreen;
