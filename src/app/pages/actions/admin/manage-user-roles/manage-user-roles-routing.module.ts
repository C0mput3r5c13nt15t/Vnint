import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageUserRolesPage } from './manage-user-roles.page';

const routes: Routes = [
  {
    path: '',
    component: ManageUserRolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratePageRoutingModule {}
