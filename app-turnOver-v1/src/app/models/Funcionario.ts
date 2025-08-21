import { Cargo } from "./Cargo";
import { Endereco } from "./Endereco";
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
  cargoId: string;
  setorId: string;
  cargo: Cargo,
  setor: Setor,
  enderecoId: string;
  endereco: Endereco;
}
