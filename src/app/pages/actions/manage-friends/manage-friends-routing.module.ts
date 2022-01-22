import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageFriendsPage } from './manage-friends.page';

const routes: Routes = [
  {
    path: '',
    component: ManageFriendsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageFriendsPageRoutingModule {}
