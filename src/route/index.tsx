import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthContext } from "../contexts/authContext";
import { AuthStackParamsList } from "../types/authStack";
import { MainStackParamsList } from "../types/mainStack";
import AuthStack from "./authStack";
import MainStack from "./mainStack";

type NavigationRouteList = AuthStackParamsList & MainStackParamsList;

/*eslint-disable*/
declare global {
	namespace ReactNavigation {
		type RootParamList = NavigationRouteList;
	}
}
/*eslint-enable*/

const Routes: React.FC = () => {
	const { authenticated } = React.useContext(AuthContext);

	return (
		<NavigationContainer>
			{authenticated ? <MainStack /> : <AuthStack />}
		</NavigationContainer>
	);
};

export default Routes;
