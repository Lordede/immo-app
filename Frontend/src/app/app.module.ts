import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { Routes, RouterModule } from '@angular/router';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserService } from './services/user.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  {path: "add-property", component: AddPropertyComponent},
  {path: "", component: PropertyListComponent}, //leerer string leitet zu localhost:xxxx
  {path: "rent-property", component: PropertyListComponent},
  {path: "property-detail/:id", component: PropertyDetailComponent},
  {path: "user/login", component: UserLoginComponent},
  {path: "user/register", component: UserRegisterComponent},
  {path: "**", component: PropertyListComponent}, // wenn falscher URL eingegeben wurde / kann man zb. eigene 404 seite machen
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    NavBarComponent,
    PropertyDetailComponent,
    UserRegisterComponent,
    UserLoginComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    HousingService,
    UserService,
    AlertifyService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
