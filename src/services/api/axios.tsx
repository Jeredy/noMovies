import axios from "axios";

import { baseUrl } from "../../constants/api";

const api = axios.create({
	baseURL: baseUrl,
	timeout: 15000,
	headers: { "Content-Type": "application/json" },
});

export const setAuthorization = (token: string | null): void => {
	api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default api;
