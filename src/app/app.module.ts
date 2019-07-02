import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {Form1Component} from './form1/form1.component';
import {Form2Component} from './form2/form2.component';
import {Form3Component} from './form3/form3.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {ClientDataService} from './client-data.service';

const routes: Routes = [
    {path: 'form-1', component: Form1Component},
    {path: 'form-2', component: Form2Component},
    {path: 'form-3', component: Form3Component},
    { path: '',
        redirectTo: '/form-1',
        pathMatch: 'full'
    },
];

@NgModule({
    declarations: [
        AppComponent,
        Form1Component,
        Form2Component,
        Form3Component
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        ClientDataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
