import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobPartComponent } from '../Product/mob-part/mob-part.component';
import { BookComponent } from '../Product/book/book.component';
import { LaptopComponent } from '../Product/laptop/laptop.component';
import { PenComponent } from '../Product/pen/pen.component';
import { RouterModule, Routes } from '@angular/router';
import { MobileNavComponent } from '../Product/mob-part/mobile-nav/mobile-nav.component';
import { MotoComponent } from '../Product/mob-part/moto/moto.component';
import { SamsungComponent } from '../Product/mob-part/samsung/samsung.component';


const appRoutes: Routes = [
  
  {path: 'Mobile Phones', component: MobPartComponent},
  {
    path: 'mobile',
    component: MobileNavComponent,
    children: [
      { path: '', component: MobPartComponent },
      {
        path: 'moto',
        component: MotoComponent,
      },
      {
        path: 'sam',
        component: SamsungComponent,
      },
    ],
  },
  { path: 'Brand', component: BookComponent },
  { path: 'Categories', component: LaptopComponent },
  { path: 'Sign in', component: PenComponent },
];

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
