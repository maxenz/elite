import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamHomePage } from '../pages';

@NgModule({
  declarations: [
    TeamHomePage,
  ],
  imports: [
    IonicPageModule.forChild(TeamHomePage),
  ],
})
export class TeamHomePageModule {}
