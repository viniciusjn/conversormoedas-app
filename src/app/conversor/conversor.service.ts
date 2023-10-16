import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversorService {
  private apiUrl = 'https://api.apilayer.com/exchangerates_data';

  constructor(private http: HttpClient) {}

  getTaxasDeCambio(): Observable<any> {
    return this.http.get(`${this.apiUrl}/latest`);
  }

  converterMoeda(valor: number, moedaOrigem: string, moedaDestino: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/convert?from=${moedaOrigem}&to=${moedaDestino}&amount=${valor}`
    );
  }
}