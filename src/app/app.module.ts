import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarListComponent} from './car-list/car-list.component';

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {CarEditComponent} from './car-edit/car-edit.component';

import {GiphyService} from './shared/giphy/giphy.service';
import {CarService} from './shared/car/car.service';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './_guards/auth.guard';
import {AuthenticationService} from './_services/authentication.service';
import {UserService} from './shared/user/user.service';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './_interceptors/token.interceptor';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CarListComponent,
    CarEditComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    routing
  ],
  providers: [
    CarService,
    GiphyService,
    AuthGuard,
    AuthenticationService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
