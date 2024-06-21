import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Producto } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private environment: string
  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.environment = environment.endpoint;
    this.myAppUrl = 'api';
  }
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.environment}${this.myAppUrl}/productos`);
  }

  getProdutoById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.environment}${this.myAppUrl}/productos/${id}`);
  }

  deleteProducto(id: number): Observable<void> {
    const url = `${this.environment}${this.myAppUrl}/productos/${id}`;
    return this.http.delete<void>(url);
  }

  createProducto(producto: Producto, file?: File): Observable<Producto> {
    const formData: FormData = new FormData();
    formData.append('nombre', producto.nombre);
    formData.append('descripcion', producto.descripcion);
    formData.append('categoria', producto.categoria);
    formData.append('precio', producto.precio.toString());
    if (file) {
      formData.append('imagen', file, file.name);
    }

    return this.http.post<Producto>(`${this.environment}${this.myAppUrl}/productos`, formData);
  }

  updateProducto(id: number, producto: Producto, file?: File): Observable<Producto> {
    const formData: FormData = new FormData();
    formData.append('nombre', producto.nombre);
    formData.append('descripcion', producto.descripcion);
    formData.append('categoria', producto.categoria);
    formData.append('precio', producto.precio.toString());
    if (file) {
      formData.append('imagen', file, file.name);
    }

    return this.http.put<Producto>(`${this.environment}${this.myAppUrl}/productos/${id}`, formData);
  }
}
