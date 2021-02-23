interface TipoMovimento {
  R: string;
  D: string;
  TC: string;
  TU: string;
};

export interface PlanoConta {
  descricao: string;
  id: number;
  login: string;
  padrao: boolean;
  tipoMovimento: Array<TipoMovimento>;
}
