import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfileComponent } from './profile/profile.component';

import { ValidateService } from './validate.service';
import { DataService } from './data.service';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainPageComponent,
    ProfileComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ValidateService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
