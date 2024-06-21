import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-viewclient',
  templateUrl: './viewclient.component.html',
  styleUrl: './viewclient.component.css'
})
export class ViewclientComponent implements OnInit {
  productos: Producto[] = [];
  selectedProducto: Producto | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.productService.getProductos().subscribe((data: Producto[]) => {
      this.productos = data;
    }, error => {
      console.error('Error al obtener productos', error);
    });
  }

  openModal(producto: Producto): void {
    this.selectedProducto = producto;
  }

  closeModal(): void {
    this.selectedProducto = null;
  }
}
