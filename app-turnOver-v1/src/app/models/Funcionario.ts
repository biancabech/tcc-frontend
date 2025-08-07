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
