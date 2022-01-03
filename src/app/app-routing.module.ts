import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import{GridComponent} from './grid/grid.component';
import {ApplyComponent} from './apply/apply.component'
import {SpinnerComponent} from './spinner/spinner.component'
const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'details', component:DetailsComponent},
  {path:'grid', component:GridComponent},
  {path :'apply', component:ApplyComponent},
  {path :'spinner', component:SpinnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
