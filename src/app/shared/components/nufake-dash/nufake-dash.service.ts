import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Dashboard } from '../../interfaces/Dashboard.interface';
import { LancamentoDTO } from '../../interfaces/lancamento/LancamentoDTO.interface';
import { PlanoConta } from '../../interfaces/lancamento/planos-conta/PlanoConta.interface';

@Injectable({
  providedIn: 'root'
})
export class NufakeDashService {
  API_URL = environment.API_URL

 
  constructor(
    private http: HttpClient
  ) { }

  dashboard(): Observable<Dashboard> {
    const httpParams = new HttpParams({
      fromObject: {
        fim: this.getData(),
        inicio: this.getData(),
        login: "mandre"
      }
    })
    return this.http.get<Dashboard>(`${this.API_URL}/dashboard`, { params: httpParams })
  }

  getData(): string {
    return new Date().getFullYear() + "-" + new Date().toLocaleString("pt-BR", { month: "2-digit" }) + "-" + new Date().toLocaleString("pt-BR", { day: "2-digit" })
  }

  lancamentos(lancamento: LancamentoDTO): Observable<void> {
    return this.http.post<void>(`${this.API_URL}/lancamentos`, lancamento)
  }

  getPlanosConta(): Observable<PlanoConta[]> {
    const httpParams = new HttpParams({
      fromObject: {
        login: "mandre"
      }
    })

    return this.http.get<PlanoConta[]>(`${this.API_URL}/lancamentos/planos-conta`, { params: httpParams })
  }

  planosConta(conta: Omit<PlanoConta, 'id'|'padrao'>) {
    const { descricao, login, tipoMovimento } = conta

    return this.http.post(`${this.API_URL}/lancamentos/planos-conta`, { descricao, login, tipoMovimento })
  }
}
