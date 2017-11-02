import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {IonicStorageModule} from '@ionic/storage';
import {SQLite} from '@ionic-native/sqlite';
import {MyApp} from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {
  MyTeamsPage,
  GamePage,
  TeamDetailPage,
  TeamsPage,
  TournamentsPage,
  TeamHomePage,
  StandingsPage,
  MapPage
} from '../pages/pages';
import {HttpModule} from '@angular/http';
import {EliteApi, UserSettings} from '../shared/shared';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    GamePage,
    TeamDetailPage,
    TeamsPage,
    TournamentsPage,
    TeamHomePage,
    StandingsPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({apiKey:  'AIzaSyCAbiP4PHvS_bJA33hg9-kHE5dxEdHNF68'}),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    GamePage,
    TeamDetailPage,
    TeamsPage,
    TournamentsPage,
    TeamHomePage,
    StandingsPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteApi,
    UserSettings,
    SQLite
  ]
})
export class AppModule {
}
