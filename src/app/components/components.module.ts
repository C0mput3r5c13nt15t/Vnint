import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { EmptyCardComponent } from './empty-card/empty-card.component';
import { FooterComponent } from './footer/footer.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { NavCardComponent } from './nav-card/nav-card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { TextAvatarComponent } from './text-avatar/text-avatar.component';
import { AlertCardComponent } from "./alert-card/alert-card.component";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [EmptyCardComponent, FooterComponent, MenuFooterComponent, NavCardComponent, AlertCardComponent,
                 ToolbarComponent, BackButtonComponent, TextAvatarComponent],
  exports: [EmptyCardComponent, FooterComponent, MenuFooterComponent, NavCardComponent, AlertCardComponent,
            ToolbarComponent, BackButtonComponent, TextAvatarComponent]
})
export class ComponentsModule {}
