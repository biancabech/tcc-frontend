export interface Acompanhamento {
  funcionarioId: string; // para receber Guid
  data: string;
  produtividade: string;
  qualidade: string;
  prazos: string;
  comunicacao: boolean;
  trabalhoEquipe: boolean;
  adaptabilidade: boolean;
  proatividade: boolean;
  feedback: string;
  treinamento: string;
  plano: string;
  avaliador: string;
  confirmacao: string;
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
}