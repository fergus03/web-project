import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SkincareProduct} from './models';

@Injectable({
  providedIn: 'root'
})
export class SkincareProductService {

  constructor(private http: HttpClient) { }

  getProducts(skin_type_id:number,product_type_id :number): Observable<SkincareProduct[]> {
    return this.http.get<SkincareProduct[]>(`http://127.0.0.1:8000/api/skin-types/${skin_type_id}/product-types/${product_type_id}/`);
  }
}
