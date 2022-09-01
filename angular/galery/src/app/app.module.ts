import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { DisplayCardsComponent } from './display-cards/display-cards.component';
import { StarsComponent } from './stars/stars.component';
import { TabsComponent } from './tabs/tabs.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    DisplayCardsComponent,
    StarsComponent,
    TabsComponent,
    SettingsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
