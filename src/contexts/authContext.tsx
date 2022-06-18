import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AdminModel } from "../shared/models/admin";
import api, { setAuthorization } from "../services/api/axios";

import {
	PropsContext,
	PropsState,
	LayoutProps,
	PropsAction,
	Types,
} from "../shared/types/authContext";

const INITIAL_STATE: PropsContext = {
	admin: null,
	authenticated: false,
	passwordToken: "",
};

const AuthContext = React.createContext({
	...INITIAL_STATE,
});

const AuthReducer = (state: PropsState, action: PropsAction) => {
	const { type, payload } = action;

	/* eslint-disable */
	switch (type) {
		case Types.SET_AUTHENTICATION:
			const authenticated = (state.authenticated = payload!);

			AsyncStorage.setItem("@authenticated", JSON.stringify(payload));
			return {
				...state,
				value: authenticated,
			};
		case Types.SET_ADMIN:
			const admin = (state.admin = payload);

			AsyncStorage.setItem("@admin", JSON.stringify(admin));
			setAuthorization(admin?.token ?? admin);

			return {
				...state,
				value: admin,
			};
		case Types.SET_PASSWORD_TOKEN:
			const token = (state.passwordToken = payload);

			return {
				...state,
				value: token,
			};
		default:
			return state;
	}
	/* eslint-enable */
};

const AuthProvider = (props: LayoutProps) => {
	const [state, dispatch] = React.useReducer(AuthReducer, INITIAL_STATE);

	React.useEffect(() => {
		AsyncStorage.getItem("@authenticated").then((response) => {
			if (response === "true") setAuthenticated(true);
		});

		AsyncStorage.getItem("@admin").then((response) => {
			const admin = JSON.parse(response!);

			if (admin) {
				setAdmin(admin);
				api.defaults.headers.common[
					"Authorization"
				] = `Bearer ${admin.authToken}`;
			}
		});
	}, []);

	const setAuthenticated = (value: boolean) => {
		dispatch({
			type: Types.SET_AUTHENTICATION,
			payload: value,
		});
	};

	const setAdmin = (admin: AdminModel | null) => {
		dispatch({
			type: Types.SET_ADMIN,
			payload: admin,
		});
	};

	const setPasswordToken = (token: string) => {
		dispatch({
			type: Types.SET_PASSWORD_TOKEN,
			payload: token,
		});
	};

	return (
		<AuthContext.Provider
			value={{
				admin: state.admin,
				authenticated: state.authenticated,
				passwordToken: state.passwordToken,
				setAuthenticated,
				setAdmin,
				setPasswordToken,
			}}
			{...props}
		/>
	);
};

export { AuthContext, AuthProvider };
