import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  public postLoginData(data: any) {
    return this.httpClient.post(this.url + `admin/login`, data);
  }
}
