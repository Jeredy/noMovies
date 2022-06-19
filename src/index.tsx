/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import Routes from "./route";
import { ThemeProvider } from "styled-components/native";
import theme from "./shared/styles/colors";
import { AuthProvider } from "./contexts/authContext";

const App: React.FC = () => {
	return (
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</AuthProvider>
	);
};

export default App;
