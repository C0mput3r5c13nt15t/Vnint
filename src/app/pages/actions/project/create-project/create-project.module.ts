import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { CreateProjectPageRoutingModule } from './create-project-routing.module';
import { ComponentsModule } from '../../../../components/components.module';

import { CreateProjectPage } from './create-project.page';

import {createTranslateLoader} from "src/app/app.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateProjectPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [CreateProjectPage]
})
export class CreateProjectPageModule {}
