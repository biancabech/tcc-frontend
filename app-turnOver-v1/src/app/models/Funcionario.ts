export interface Funcionario {
  id: string;
  nome: string;
  genero: string;
  cpf: string;
  dataNasci: string;
  dataAdmi: string;
  dataDemi?: string
  email: string;
  cargoId: string;
  setorId: string;
  cargo: {
    id: string;
    nome: string;
  },
  setor: {
    id: string;
    nome: string;
  },
  enderecoId: string;
}
