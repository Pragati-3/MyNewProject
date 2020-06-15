import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavComponent } from './layouts/nav/nav.component';
import { ProductsComponent } from './layouts/products/products.component';
import { SimpleStyleDirective } from './directives/simple-style.directive';
import { NewstyleDirective } from './directives/newstyle.directive';
import { BookComponent } from './Product/book/book.component';
import { MobPartComponent } from './Product/mob-part/mob-part.component';
import { PenComponent } from './Product/pen/pen.component';
import { LaptopComponent } from './Product/laptop/laptop.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerTwoComponent,
    BannerOneComponent,
    BannerThreeComponent,
    ContactUsComponent,
    FooterComponent,
    NavComponent,
    ProductsComponent,
    SimpleStyleDirective,
    NewstyleDirective,
    BookComponent,
    MobPartComponent,
    PenComponent,
    LaptopComponent
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
