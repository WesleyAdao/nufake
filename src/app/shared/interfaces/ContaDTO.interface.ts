import { Lancamento } from "./lancamento/Lancamento.interface";

export interface ContaDTO{
  id:string;
  lancamentos:Lancamento;
  saldo:number;
}
