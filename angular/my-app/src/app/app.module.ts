import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MainComponent} from './main/main.component';
import { TitleComponent } from './title/title.component';
import { TitleForMyApplicationComponent } from './title-for-my-application/title-for-my-application.component';
import { MyLoremComponent } from './my-lorem/my-lorem.component';
import { TestComponent } from './test/test.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TitleComponent,
    TitleForMyApplicationComponent,
    MyLoremComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
