import * as React from "react";
import Banner from "../../components/banner";
import CategoriesListComponent from "../../components/Categories";
import * as S from "./styles";

const HomeScreen = () => {
	return (
		<S.SafeAreaView>
			<S.Container>
				<Banner />
				<CategoriesListComponent />
			</S.Container>
		</S.SafeAreaView>
	);
};

export default HomeScreen;
