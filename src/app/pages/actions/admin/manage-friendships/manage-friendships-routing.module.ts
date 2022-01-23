import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageFriendshipsPage } from './manage-friendships.page';

const routes: Routes = [
  {
    path: '',
    component: ManageFriendshipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageFriendshipsPageRoutingModule {}
