import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageApplicationSettingsPageRoutingModule } from './manage-application-settings-routing.module';

import { ManageApplicationSettingsPage } from './manage-application-settings.page';
import {ComponentsModule} from "../../../../components/components.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {createTranslateLoader} from "../manage-user-roles/manage-user-roles.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageApplicationSettingsPageRoutingModule,
    ComponentsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule
  ],
  declarations: [ManageApplicationSettingsPage]
})
export class ManageApplicationSettingsPageModule {}
