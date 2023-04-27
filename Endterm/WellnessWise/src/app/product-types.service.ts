import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "./models";

@Injectable({
  providedIn: 'root'
})
export class ProductTypesService {

  constructor(private http: HttpClient) { }

  getProductTypes(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('http://127.0.0.1:8000/api/product-types/');
  }
}
