import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { MobPartComponent } from '../Product/mob-part/mob-part.component';
import { BookComponent } from '../Product/book/book.component';
import { LaptopComponent } from '../Product/laptop/laptop.component';
import { PenComponent } from '../Product/pen/pen.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'Home', component: AppComponent },
  {path: 'Mobile Phones', component: MobPartComponent},
  { path: 'Brand', component: BookComponent },
  { path: 'Categories', component: LaptopComponent },
  { path: 'Sign in', component: PenComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
