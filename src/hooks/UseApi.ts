import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:5000",
	//baseURL: process.env.ROOMIE_APP_API,
});

export const useApi = () => ({

	signin: async (email: string, senha: string) => {
		const response = await api.post("/auth", { email, senha });
		return response.data;
	}
});
