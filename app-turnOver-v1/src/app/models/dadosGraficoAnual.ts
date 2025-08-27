interface Value<T> {
  valor: T;
  titulo: string;
}

export interface DadosGraficoAnual {
  dadosTurnover: Value<number>[],
  motivosDeDesligamento: Value<number>[];
  desligamentosPorSetor: Value<number>[];
  desligamentosPorCargos: Value<number>[]
  qtdeAdmitidos: number;
  qtdeDesligados: number;
}

