import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { SliderComponent } from './layout/slider/slider.component';
import { SearchBarComponent } from './layout/search-bar/search-bar.component';
import { ProductComponent } from './layout/product/product.component';
import { CardsComponent } from './layout/cards/cards.component';
import { BannerComponent } from './layout/banner/banner.component';
import { GalleryComponent } from './layout/gallery/gallery.component';
import { ContactComponent } from './layout/contact/contact.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ButtonsComponent } from './layout/buttons/buttons.component';
import { MobPartsComponent } from './product/mob-parts/mob-parts.component';
import { BooksComponent } from './product/books/books.component';
import { BikesComponent } from './product/bikes/bikes.component';
import { WatchesComponent } from './product/watches/watches.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SliderComponent,
    SearchBarComponent,
    ProductComponent,
    CardsComponent,
    BannerComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
    ButtonsComponent,
    MobPartsComponent,
    BooksComponent,
    BikesComponent,
    WatchesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
