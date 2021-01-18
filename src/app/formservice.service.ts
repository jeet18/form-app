import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormserviceService {
  baseUrl = 'http://localhost/Task/form-app/server/api'
  constructor(private httpService:HttpClient) { }
  public postaddressData(data: FormData) :Observable<any>{
    return this.httpService.post(`${this.baseUrl}/create.php`, data)
  }
  
}
