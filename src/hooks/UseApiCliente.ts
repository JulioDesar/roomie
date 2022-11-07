import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:5050",
	//baseURL: process.env.ROOMIE_APP_API,
});

export const useApiCliente = () => ({

	pegarImoveis: async () => {
		const response = await api.get("/imoveis/imovel", {
			headers: {
				"Authorization": `Bearer ${localStorage.getItem("tokenCliente")}`
			}
		});
		return response.data.content;
	}
});
