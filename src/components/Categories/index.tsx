import { FlatList } from "react-native";
import React from "react";
import categories from "../../mockup/categories";
import * as S from "./styles";
import { CategoryModel } from "../../shared/models/category";
import ShadowComponent from "../Shadow";
import colors from "../../shared/styles/colors";

interface CategoryItemProps {
	data: CategoryModel;
}

const CategoriesListComponent: React.FC = () => {
	const [selected, setSelected] = React.useState<string>(categories[0].id);

	const CategoryItem: React.FC<CategoryItemProps> = ({ data }) => {
		return (
			<ShadowComponent
				shadowColor={
					data.id === selected ? colors.colors.shadow : "transparent"
				}
				/*eslint-disable*/
				styles={{ marginTop: 2, marginBottom: 2 }}
				/*eslint-enable*/
			>
				<S.ItemContainer
					selected={data.id === selected}
					onPress={() => setSelected(data.id)}
				>
					<S.ItemText selected={data.id === selected}>{data.title}</S.ItemText>
				</S.ItemContainer>
			</ShadowComponent>
		);
	};

	return (
		<S.Container>
			<S.Title>Categories</S.Title>
			<FlatList
				data={categories}
				keyExtractor={(item, index) => String(index)}
				horizontal
				renderItem={({ item }) => <CategoryItem data={item} />}
				showsHorizontalScrollIndicator={false}
				scrollEventThrottle={32}
			/>
		</S.Container>
	);
};

export default CategoriesListComponent;
