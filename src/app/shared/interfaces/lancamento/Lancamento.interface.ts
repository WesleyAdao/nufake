import { PlanoConta } from "./planos-conta/PlanoConta.interface";

interface Tipo {
  R: string;
  D: string;
  TC: string;
  TU: string;
}
export interface Lancamento {
  conta: number;
  data: string;
  descricao: string;
  id: number;
  planoConta: PlanoConta;
  tipo: Array<Tipo>
  valor: number;
}
