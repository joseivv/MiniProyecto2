import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JuegosComponent } from './juegos/juegos.component';
import { AdminComponent } from './admin/admin.component';
import { ComprarComponent } from './comprar/comprar.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DetallesComponent } from './detalles/detalles.component';
import { HttpClientModule } from '@angular/common/http'
import { FilterPipe } from '../app/pipe/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreModule } from '@angular/fire/firestore';
import { NewjuegosComponent } from './newjuegos/newjuegos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JuegosComponent,
    AdminComponent,
    ComprarComponent,
    DetallesComponent,
    FilterPipe,
    NewjuegosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
