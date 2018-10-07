import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs'
import { SummaryPage } from '../pages/summary/summary'
import { ExperiencePage } from '../pages/experience/experience';
import { ProjectsPage } from '../pages/projects/projects';
import { SkillsPage } from '../pages/skills/skills';
import { ContactPage } from '../pages/contact/contact';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    SummaryPage,
    ExperiencePage,
    ProjectsPage,
    SkillsPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    SummaryPage,
    ExperiencePage,
    ProjectsPage,
    SkillsPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
