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
	pegar: async () => {
		//const response = await api.get(`/users/user?nome=${nome}`, {
		const response = await api.get("/users/user", {
			headers: {
				"Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgUm9vbWllIiwic3ViIjoiMSIsImlhdCI6MTY2NTQ0MzA3MywiZXhwIjoxNjY1NDQ2NjczfQ.OpWQMbT5icXjSROybpEYhrPCb9Cpawyy2Brm4Cl71Kw`
				//"Authorization": `Bearer ${localStorage.getItem("authToken")}`
			}
		})

		return response.data;
	}

});
