import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllCategories } from '../../interfaces/Category/iall-categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BaseUrl: string = 'https://academyapi-c4d2bjd3cwezbdcn.westeurope-01.azurewebsites.net/api/Category';

  constructor(private http: HttpClient) { }

  public  GetAllCategories(): Observable<IAllCategories[]>{
    return this.http.get<IAllCategories[]>(this.BaseUrl);
    }

}
