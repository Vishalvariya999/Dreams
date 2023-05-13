import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public url: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getPrjManager() {
    return this.http.get(this.url + `admin/getManager`);
  }

  postPrjManager(data: any) {
    return this.http.post(this.url + `admin/addManager`, data);
  }

  getPrjManagerDetails(id: any) {
    return this.http.get(
      this.url + `admin/getManager?column=id&searchKey=${id}`
    );
  }
}
