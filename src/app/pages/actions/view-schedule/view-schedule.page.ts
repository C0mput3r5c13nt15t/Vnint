import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/interfaces/event';
import { EventService } from 'src/app/services/event.service';
import { ErrorService } from 'src/app/services/error.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-view-schedule',
  templateUrl: './view-schedule.page.html',
  styleUrls: ['./view-schedule.page.scss'],
})
export class ViewSchedulePage implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService,
              private errorService: ErrorService,
              public translateService: TranslateService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents().subscribe({
      error: error => {
        this.errorService.errorOccurred.emit(error);
      },
      next: response => {
        const resp: any = response;
        this.events = resp.events;
      },
    });
  }

}
