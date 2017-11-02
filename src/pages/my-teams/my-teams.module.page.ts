import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTeamsPage } from '../pages';

@NgModule({
  declarations: [
    MyTeamsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTeamsPage),
  ],
})
export class MyTeamsPageModule {}
