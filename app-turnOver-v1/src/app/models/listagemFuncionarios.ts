export interface ListagemFuncionarios {
  cpf: string;
  nome: string;
  email: string;
  setorId: string;
  setorNome?: string;
  cargoId: string;
  cargoNome?: string;
  endereco?: {
    rua: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  dataNasci: string;
  dataAdmi: string;
  dataDemi?: string;
  genero: string;
}