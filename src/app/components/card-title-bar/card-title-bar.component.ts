import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-title-bar',
  templateUrl: './card-title-bar.component.html',
  styleUrls: ['./card-title-bar.component.scss'],
})
export class CardTitleBarComponent implements OnInit {
  @Input() title: string = '';

  constructor() {}

  ngOnInit() { }

}
