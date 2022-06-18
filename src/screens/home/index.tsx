import * as React from "react";
import Banner from "../../components/banner";
import * as S from "./styles";

const HomeScreen = () => {
	return (
		<S.SafeAreaView>
			<S.Container>
				<Banner />
			</S.Container>
		</S.SafeAreaView>
	);
};

export default HomeScreen;
