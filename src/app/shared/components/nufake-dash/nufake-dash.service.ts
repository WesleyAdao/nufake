import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Dashboard } from '../../interfaces/Dashboard.interface';

@Injectable({
  providedIn: 'root'
})
export class NufakeDashService {
  API_URL = environment.API_URL

  httpParams = new HttpParams({
    fromObject: {
      fim: this.getData(),
      inicio: this.getData(),
      login: "mandre"
    }
  })

  constructor(
    private http: HttpClient
  ) { }

  dashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>(`${this.API_URL}/dashboard`, { params: this.httpParams })
  }

  getData(): string {
    return new Date().getFullYear() + "-" + new Date().toLocaleString("pt-BR", { month: "2-digit" }) + "-" + new Date().toLocaleString("pt-BR", { day: "2-digit" })
  }

}
