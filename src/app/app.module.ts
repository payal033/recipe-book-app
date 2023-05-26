import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { DiscoverComponent } from './discover/discover.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DiscoverComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule, // some shared modules, components and pipes
    CoreModule, // services
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
