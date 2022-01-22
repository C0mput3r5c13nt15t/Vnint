import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiveFeedbackPage } from './give-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: GiveFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiveFeedbackPageRoutingModule {}
