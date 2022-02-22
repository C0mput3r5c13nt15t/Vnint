import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.page.html',
  styleUrls: ['./impressum.page.scss'],
})
export class ImpressumPage implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
}
