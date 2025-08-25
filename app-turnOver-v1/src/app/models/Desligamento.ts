import { Funcionario } from "./Funcionario";

export interface Desligamento {
  id: string;
  dataDesligamento: string;
  isGrave: string;
  descricao: string;
  funcionario: Pick<Funcionario, 'id' | 'nome' | 'cpf'>;   //Pick serve para puxar só as propriedades que eu quero
  feedDesligamento: string;
  funcionarioId: string;
  motivoDesligamentoId: string;
}