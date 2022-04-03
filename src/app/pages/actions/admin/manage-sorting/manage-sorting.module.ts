import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageSortingPageRoutingModule } from './manage-sorting-routing.module';

import { ManageSortingPage } from './manage-sorting.page';
import {ComponentsModule} from "../../../../components/components.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "../../../../app.module";
import {HttpClient} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageSortingPageRoutingModule,
    ComponentsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [ManageSortingPage]
})
export class ManageSortingPageModule {}
