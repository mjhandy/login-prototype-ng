import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { LoginComponent } from './components/loginfow/login/login.component';
import { LoginflowModule } from './components/loginfow/loginflow/loginflow.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginflowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
