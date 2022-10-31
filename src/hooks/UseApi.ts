import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:5000",
	//baseURL: process.env.ROOMIE_APP_API,
});

export const useApi = () => ({
	validateToken: async (token: string) => {
		const response = await api.get(`/auth/valid?token=${token}`);
		return response.data;
	},
	signin: async (email: string, senha: string) => {
		const response = await api.post("/auth", { email, senha });
		return response.data;
	},
	cadastrar: async (nome: string, cpf: string, telefone: string, nascimento: string, funcao: string, email: string, senha: string) => {
		const response = await api.post("/users/", {
			nome,
			cpf,
			telefone,
			nascimento,
			funcao,
			email,
			senha
		}, {
			headers: {
				"Authorization": `Bearer ${localStorage.getItem("authToken")}`
			}
		})

		return response.data;
	},
	pegar: async (nome: string) => {
		const response = await api.get(`/users/user?nome=${nome}`, {
			headers: {
				"Authorization": `Bearer ${localStorage.getItem("authToken")}`
			},
			timeout: 1
		})
		return response.data.content;
	},
	atualizar: async (id: number, telefone: string, ativo: boolean, funcao: string) => {
		const response = await api.put(`/users/${id}`, {
			telefone,
			ativo,
			funcao
		}, {
			headers: {
				"Authorization": `Bearer ${localStorage.getItem("authToken")}`
			}
		})
		return response.status;
	},
});
