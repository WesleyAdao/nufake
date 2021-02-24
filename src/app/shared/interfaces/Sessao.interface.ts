import { Conta } from "./Conta.interface";
import { Usuario } from "./usuario/Usuario.interface";

export interface Sessao {
  conta: Conta;
  contaCredito: Conta;
  dataFim: string;
  dataInicio: string;
  token: string;
  usuario: Usuario;
}
