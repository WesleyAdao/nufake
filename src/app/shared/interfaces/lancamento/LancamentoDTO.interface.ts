export interface ContaDestino {
  cpfDestino: string;
  telefoneDestino: string;
  apelidoDestino: string;
}

export interface LancamentoDTO {
  conta: number;
  contaDestino?: Array<ContaDestino>
  data: string;
  descricao: string;
  login: string;
  planoConta: number;
  valor: number;
}
