import { Component } from '@angular/core';
import { Producto } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listadmin',
  templateUrl: './listadmin.component.html',
  styleUrl: './listadmin.component.css'
})
export class ListadminComponent {

  productos: Producto[] = [];
  selectedProducto: Producto | null = null;

  constructor(
    private productService: ProductService,
    private router: Router) {}

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

  deleteProducto(id: number): void {
    this.productService.deleteProducto(id).subscribe(() => {
      this.productos = this.productos.filter(producto => producto.id !== id);
    }, error => {
      console.error('Error al eliminar producto', error);
    });
  }

  editProducto(id: number): void {
    this.router.navigate([`/editarproducto/${id}`]);
  }

  openModal(producto: Producto): void {
    this.selectedProducto = producto;
  }

  closeModal(): void {
    this.selectedProducto = null;
  }
}
