import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewclientComponent } from './viewclient/viewclient.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListadminComponent } from './listadmin/listadmin.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '', redirectTo: '', pathMatch: 'full'
  },
  {
    path: "", component: ViewclientComponent
  },
  {
    path: "vistacliente", component: ViewclientComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "navbar", component: NavbarComponent
  },
  {
    path: "crearproducto", component: ProductComponent
  },
  {
    path: 'editarproducto/:id', component: ProductComponent
  },
  {
    path: "categorias", component: CategoriaComponent
  },
  {
    path: "lista",component: ListadminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
