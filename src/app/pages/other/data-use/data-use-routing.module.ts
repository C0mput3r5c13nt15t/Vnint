import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataUsePage } from './data-use.page';

const routes: Routes = [
  {
    path: '',
    component: DataUsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataUsePageRoutingModule {}
