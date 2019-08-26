import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleTabsPage } from './schedule-tabs';

@NgModule({
  declarations: [
    ScheduleTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleTabsPage),
  ],
})
export class ScheduleTabsPageModule {}
