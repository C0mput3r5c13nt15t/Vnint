import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Permission } from 'src/app/interfaces/permission';

@Component({
  selector: 'app-nav-card',
  templateUrl: './nav-card.component.html',
  styleUrls: ['./nav-card.component.scss'],
})
export class NavCardComponent implements OnInit {
  @Input()  cardTitle: string;
  @Input()  cardIcon: string;
  @Input()  cardButtons: string;
  @Input()  permissions: Permission[] = [];
  @Input()  eventPermissions: Permission[] = [];
  cardButtonsArray: object[];


  constructor(private router: Router) { }

  ngOnInit() {
    this.cardButtonsArray = JSON.parse(this.cardButtons);
  }

  route(route) {
    console.log(route);
    this.router.navigate([route]);
  }

  /**
   * Returns true if the first specified array contains all elements
   * from the second one. false otherwise.
   *
   * @param {array} superset
   * @param {array} subset
   *
   * @returns {boolean}
   */
  arrayContainsArray (superset, subset) {
    return subset.every(function (value) {
      return (superset.includes(value));
    });
  }

}
