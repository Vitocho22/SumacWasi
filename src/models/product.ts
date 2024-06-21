// models/producto.ts
export class Producto {
  constructor(
    public id: number | null,
    public nombre: string,
    public descripcion: string,
    public categoria: string,
    public precio: number,
    public imagen?: string,
  ){}
}
