import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InjectableRxStompConfig, StompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { FindTrainComponent } from './find-train/find-train.component';
import { LiveTrainLocationComponent } from './live-train-location/live-train-location.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { socketConfig } from './socket.config';

@NgModule({
  declarations: [
    AppComponent,
    FindTrainComponent,
    LiveTrainLocationComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
        provide: InjectableRxStompConfig,
        useValue: socketConfig
      },
      {
        provide: RxStompService,
        useFactory: rxStompServiceFactory,
        deps: [InjectableRxStompConfig]
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
