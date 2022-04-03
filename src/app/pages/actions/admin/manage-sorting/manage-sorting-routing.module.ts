import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageSortingPage } from './manage-sorting.page';

const routes: Routes = [
  {
    path: '',
    component: ManageSortingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageSortingPageRoutingModule {}
