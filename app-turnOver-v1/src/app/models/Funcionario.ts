import { Cargo } from "./Cargo";
import { Setor } from "./Setor";

export interface Funcionario {
  id: string;
  nome: string;
  genero: string;
  cpf: string;
  dataNasci: string;
  dataAdmi: string;
  dataDemi?: string
  email: string;
  cargoId: '',
  setorId: '',
  cargo: {
    id: '',
    nome: ''
  },
  setor: {
    id: '',
    nome: ''
  },
  enderecoId: string;
}

export interface FuncionarioResposta {
  id: string;
  nome: string;
  genero: string;
  cpf: string;
  dataNasci: string;
  dataAdmi: string;
  dataDemi?: string
  email: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}