export interface Funcionario {
  nome: string;
  email: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  cpf?: string;
  dataNascimento?: Date;
  dataAdmissao?: Date;
  setor?: string;
  cargo?: string;
}
