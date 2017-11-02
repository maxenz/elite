import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamDetailPage } from '../pages';

@NgModule({
  declarations: [
    TeamDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamDetailPage),
  ],
})
export class TeamDetailPageModule {}
