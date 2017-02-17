import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { EventService } from '../shared/event.service';
import { IEvent, ISession } from '../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;
  addMode: boolean;

  constructor(private eventService: EventService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    let id: number = Number.parseInt(this.route.snapshot.params['id']);
    this.event = this.eventService.getEvent(id);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id)) + 1;
    session.id = nextId;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  } 

  cancelNewSession() {
    this.addMode = false;
  }
}
