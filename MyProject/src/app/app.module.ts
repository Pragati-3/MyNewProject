import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

import { AppRoutingModule } from './modules/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MobileNavComponent } from './Product/mob-part/mobile-nav/mobile-nav.component';
import { MotoComponent } from './Product/mob-part/moto/moto.component';
import { SamsungComponent } from './Product/mob-part/samsung/samsung.component';
import { HomeComponent } from './Product/home/home.component';

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
    LaptopComponent,
    MobileNavComponent,
    MotoComponent,
    SamsungComponent,
    HomeComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
