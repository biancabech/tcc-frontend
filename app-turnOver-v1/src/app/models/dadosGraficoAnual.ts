//dto são os dados que eu envio

export interface DadosGraficoAnualDto {
  anos: string;
  meses: Value<string>[];
}



interface Value<T> {
  value: T;
  label: string;
}

export interface DadosGraficoAnual {
  units: Value<string>[];
  turnoverData: Value<number>[],
  terminationReasons: Value<number>[];
  hiringReasons: Value<number>[];
  departmentsWithTerminations: Value<number>[];
  positionsWithTerminations: Value<number>[]
  admittedCount: number;
  terminatedCount: number;
}
//preciso criar 2 modelos 1 que manda e outro que recebe
