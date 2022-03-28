import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { EmptyCardComponent } from './empty-card/empty-card.component';
import { FooterComponent } from './footer/footer.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { NavCardComponent } from './nav-card/nav-card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { TextAvatarComponent } from './text-avatar/text-avatar.component';
import { AlertCardComponent } from "./alert-card/alert-card.component";
import { CardTitleBarComponent } from "./card-title-bar/card-title-bar.component";
import {FormErrorComponent} from "./form-error/form-error.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import {createTranslateLoader} from "src/app/app.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [EmptyCardComponent, FooterComponent, MenuFooterComponent, NavCardComponent, AlertCardComponent,
                 ToolbarComponent, BackButtonComponent, TextAvatarComponent, CardTitleBarComponent, FormErrorComponent],
  exports: [EmptyCardComponent, FooterComponent, MenuFooterComponent, NavCardComponent, AlertCardComponent,
            ToolbarComponent, BackButtonComponent, TextAvatarComponent, CardTitleBarComponent, FormErrorComponent, FontAwesomeModule]
})
export class ComponentsModule {}
