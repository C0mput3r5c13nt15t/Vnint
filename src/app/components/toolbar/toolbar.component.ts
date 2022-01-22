import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ScreenSizeService } from 'src/app/services/screensize.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { StyleService } from '../../services/style.service';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  isDesktop: boolean;
  colors: string[] = [];
  prefersDark = false;

  constructor(private screenSizeService: ScreenSizeService,
              public auth: AuthService,
              public alertService: AlertService,
              public navigationService: NavigationService,
              public styleService: StyleService) {
    this.screenSizeService.isDesktopView().subscribe(isDesktop => {
        if (this.isDesktop && !isDesktop) {
        window.location.reload();
      }
      this.isDesktop = isDesktop;
    });
  }

  ngOnInit() { }

  themeChange() {
    this.styleService.updateDarkMode();
  }

}
