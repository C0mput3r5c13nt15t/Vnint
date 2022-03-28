import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { ManageProjectPageRoutingModule } from './manage-project-routing.module';
import { ComponentsModule } from '../../../../components/components.module';

import { ManageProjectPage } from './manage-project.page';

import {createTranslateLoader} from "src/app/app.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ManageProjectPageRoutingModule,
        ComponentsModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        ReactiveFormsModule,
    ],
  declarations: [ManageProjectPage]
})
export class ManageProjectPageModule {}
