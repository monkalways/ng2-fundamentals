import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event;

  constructor(private eventService: EventService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    let id: number = Number.parseInt(this.route.snapshot.params['id']);
    this.event = this.eventService.getEvent(id);
  }

}
