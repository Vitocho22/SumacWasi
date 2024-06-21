import { Component } from '@angular/core';
import { Producto } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  producto: Producto = {
    id: null,
    nombre: '',
    descripcion: '',
    categoria: '',
    precio: 0
  };
  selectedFile: File | null = null;
  isEditMode = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.productService.getProdutoById(+id).subscribe((product) => {
        this.producto = product;
      });
    }
  }

  onFileChanged(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if (this.producto.nombre && this.producto.descripcion && this.producto.categoria && this.producto.precio) {
      if (this.isEditMode) {
        if (this.selectedFile) {
          this.productService.updateProducto(this.producto.id!, this.producto, this.selectedFile).subscribe(response => {
            console.log('Producto actualizado:', response);
            this.router.navigate(['/lista']);  // Redirige a la lista de productos después de actualizar
          }, error => {
            console.error('Error al actualizar el producto:', error);
          });
        } else {
          this.productService.updateProducto(this.producto.id!, this.producto).subscribe(response => {
            console.log('Producto actualizado:', response);
            this.router.navigate(['/lista']);  // Redirige a la lista de productos después de actualizar
          }, error => {
            console.error('Error al actualizar el producto:', error);
          });
        }
      } else {
        this.productService.createProducto(this.producto, this.selectedFile!).subscribe(response => {
          console.log('Producto creado:', response);
          this.router.navigate(['/lista']);  // Redirige a la lista de productos después de crear uno nuevo
        }, error => {
          console.error('Error al crear el producto:', error);
        });
      }
    } else {
      console.log('Por favor, complete todos los campos.');
    }
  }
}
