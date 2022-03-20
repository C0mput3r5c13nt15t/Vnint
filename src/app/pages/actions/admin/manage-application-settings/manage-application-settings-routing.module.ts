import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageApplicationSettingsPage } from './manage-application-settings.page';

const routes: Routes = [
  {
    path: '',
    component: ManageApplicationSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageApplicationSettingsPageRoutingModule {}
