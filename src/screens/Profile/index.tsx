import * as React from "react";
import { Text, Button } from "react-native";
import { AuthContext } from "../../contexts/authContext";
import * as S from "./styles";

const ProfileScreen = () => {
	const { setAuthenticated, setAdmin } = React.useContext(AuthContext);
	return (
		<S.SafeAreaView>
			<S.Container>
				<Text>Profile!!</Text>
				<Button
					title={"Logout"}
					onPress={() => {
						setAuthenticated?.(false), setAdmin?.(null);
					}}
				/>
			</S.Container>
		</S.SafeAreaView>
	);
};

export default ProfileScreen;
