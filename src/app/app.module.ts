import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
