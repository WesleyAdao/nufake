import { PlanoConta } from "./planos-conta/PlanoConta.interface";

export interface Lancamento {
  id: number;
  data: string;
  valor: number;
  conta: number;
  descricao: string;
  planoConta: PlanoConta;
  tipo: "R" | "D" | "TC" | "TU";
}
