import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamePage } from '../pages';

@NgModule({
  declarations: [
    GamePage,
  ],
  imports: [
    IonicPageModule.forChild(GamePage),
  ],
})
export class GamePageModule {}
