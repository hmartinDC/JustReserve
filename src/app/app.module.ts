import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { RestauranteComponent } from './components/restaurante/restaurante.component';
import { RestaurantesComponent } from './pages/restaurantes/restaurantes.component';
import { HomeComponent } from './pages/home/home.component';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { FormsModule } from '@angular/forms';
import { OfferComponent } from './components/offer/offer.component';
import { DataService } from 'src/app/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { FooterComponent } from './components/footer/footer.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { SelectedRestaurantComponent } from './components/selected-restaurant/selected-restaurant.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    RestauranteComponent,
    RestaurantesComponent,
    HomeComponent,
    OfferComponent,
    LoginComponent,
    RegisterComponent,
    LoginPageComponent,
    ProfileComponent,
    ReservaComponent,
    FooterComponent,
    SelectedRestaurantComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestauranteService, DataService, CookieService, AuthService, ReservaService, RestauranteComponent, SelectedRestaurantComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
