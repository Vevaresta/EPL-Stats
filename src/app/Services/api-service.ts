import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    //private readonly baseUrl = environment.apiBaseUrl;
    private readonly baseUrl = '/api';

    private readonly token = environment.apiToken;

    private readonly http = inject(HttpClient);

    // TODO: error handling, other CRUD methods, HttpInterceptor 
    get<T>(endpoint: string, params?: Record<string, string | number>): Observable<T> {
      console.log('📡 API GET', `${this.baseUrl}${endpoint}`);
      return this.http.get<T>(`${this.baseUrl}${endpoint}`, {
      headers: {
        "X-Auth-Token": this.token
      }, 
      params
    });
  }
}
