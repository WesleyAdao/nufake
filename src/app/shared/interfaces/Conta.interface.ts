export interface Conta {
  descricao: string;
  id: number;
  numero: string;
  saldo: number;
  tipo: Array<"CC" | "CB">;
}
