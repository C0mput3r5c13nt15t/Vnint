import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-impress',
  templateUrl: './impress.page.html',
  styleUrls: ['./impress.page.scss'],
})
export class ImpressPage implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
}
