import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StandingsPage } from '../pages';

@NgModule({
  declarations: [
    StandingsPage,
  ],
  imports: [
    IonicPageModule.forChild(StandingsPage),
  ],
})
export class StandingsPageModule {}
