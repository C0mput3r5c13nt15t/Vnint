import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-card',
  templateUrl: './nav-card.component.html',
  styleUrls: ['./nav-card.component.scss'],
})
export class NavCardComponent implements OnInit {
  @Input()  cardLink: string;
  @Input()  cardTitle: string;
  @Input()  cardDescription: string;
  @Input()  cardImageUrl: string;

  constructor(private router: Router) { }

  ngOnInit() {}

  route() {
    this.router.navigate([this.cardLink]);
  }

}
