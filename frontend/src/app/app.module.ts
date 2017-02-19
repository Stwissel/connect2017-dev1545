import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HomeComponent } from './home/home.component';
import { FruitComponent } from './fruit/fruit.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { FruitServiceService } from './fruit-service.service';
import { AuthService} from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    FruitComponent,
    FruitListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthService,AuthGuardService,FruitServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
