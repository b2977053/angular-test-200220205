import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TravelComponent } from './travel/travel.component';
import { HeaderComponent } from './header/header.component';
import { TravelEditComponent } from './travel-edit/travel-edit.component';
import { FormsModule } from '@angular/forms';
import { TravelAddComponent } from './travel-add/travel-add.component';


@NgModule({
  declarations: [
    AppComponent,
    TravelComponent,
    HeaderComponent,
    TravelEditComponent,
    TravelAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
