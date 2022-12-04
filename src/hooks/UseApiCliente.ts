import axios from "axios";
import { Alert } from "react-bootstrap";

const api = axios.create({
	baseURL: "http://localhost:5050",
	//baseURL: process.env.ROOMIE_APP_API,
});

export const useApiCliente = () => ({

	pegarImoveis: async () => {
		const response = await api.get("/imoveis/imovel", {
			headers: {
				"Authorization": `Bearer ${sessionStorage.getItem("tokenCliente")}`
			}
		});
		return response.data.content;
	},
	aceitarImovel: async (status: any, id: number) => {
		await api.put(`/imoveis/imovel/${id}`, {
			status
		}).then(response => {
			alert(`O imovel foi ${status} com sucesso`);
		}).catch(error => {
			alert("Erro ao validar o imovel");
		});
		
	}
});
