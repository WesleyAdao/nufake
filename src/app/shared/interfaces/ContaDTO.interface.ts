import { Lancamento } from "./lancamento/Lancamento.interface";

export interface ContaDTO{
  id:string;
  saldo:number;
  lancamentos:Array<Lancamento>;
}
