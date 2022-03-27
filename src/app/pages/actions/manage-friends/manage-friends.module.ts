import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ManageFriendsPageRoutingModule } from './manage-friends-routing.module';
import { ComponentsModule } from '../../../components/components.module';

import { ManageFriendsPage } from './manage-friends.page';

import {createTranslateLoader} from "src/app/app.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ManageFriendsPageRoutingModule,
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
  declarations: [ManageFriendsPage]
})
export class ManageFriendsPageModule {}
