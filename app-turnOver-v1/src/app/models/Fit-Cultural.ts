import { Funcionario } from "./Funcionario";

export interface FitCultural {
  id: string;
  nome: string;
  data: string;
  trabalhoEquipe: boolean;
  adaptabilidade: boolean;
  comunicativo: boolean;
  resolucaoConflitos: boolean;
  iniciativa: boolean;
  descricao: string;
}