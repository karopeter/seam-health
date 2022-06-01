import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer.component';
import { DoctorListComponent } from './components/doctors/doctorsList/doctorsList.component';
import { RegisterDoctorsComponent } from './components/doctors/registerDoctors/registerDoctors.component';
import { SearchDoctorsComponent } from './components/doctors/searchDoctors/searchDoctors.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    DoctorListComponent,
    RegisterDoctorsComponent,
    SearchDoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/register', pathMatch: 'full' },
      { path: 'register', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
