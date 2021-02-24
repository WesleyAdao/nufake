interface Tipo{
  CC: string;
  CB: string
}

export interface Conta {
  descricao: string;
  id: number;
  numero: string;
  saldo: number;
  tipo: Array<Tipo>;
}
