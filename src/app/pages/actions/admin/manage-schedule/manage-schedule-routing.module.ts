import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageSchedulePage } from './manage-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: ManageSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageSchedulePageRoutingModule {}
