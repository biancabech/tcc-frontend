export interface Desligamento {
  id: string;
  dataDesligamento: Date;
  isGrave: boolean;
  descricao: string;
  feedDesligamento: string;
  funcionarioId: string;
}