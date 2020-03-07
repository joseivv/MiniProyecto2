import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ComprarComponent } from './comprar/comprar.component';
import { DetallesComponent } from './detalles/detalles.component';
import { JuegosComponent } from './juegos/juegos.component';
import { NewjuegosComponent } from './newjuegos/newjuegos.component';


const appRoutes: Routes = [
    {path: '', redirectTo:'/juegos', pathMatch: 'full'},
    { path: 'comprar/:id', component: ComprarComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'detalles/:id', component: DetallesComponent },
    { path: 'juegos', component: JuegosComponent },
    { path: 'detalles', component: DetallesComponent},
    { path: 'newjuegos', component: NewjuegosComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}