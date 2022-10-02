export type User = {
    id: number;
    nome: string;
    cpf: string;
    funcao: string;
    nascimento: Date;
    telefone: string;
    email: string;
    password?: string;
}