import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleModalPage } from './schedule-modal';

@NgModule({
  declarations: [
    ScheduleModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleModalPage),
  ],
})
export class ScheduleModalPageModule {}
