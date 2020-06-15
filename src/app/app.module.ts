import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './frontend/home/home.component';
import { GeneralHeaderComponent } from './frontend/header/general-header/general-header.component';
import { GeneralFooterComponent } from './frontend/footer/general-footer/general-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeneralHeaderComponent,
    GeneralFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
