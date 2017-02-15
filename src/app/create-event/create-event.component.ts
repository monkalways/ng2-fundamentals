import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty: boolean = true;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigateByUrl("/events");
  }

  saveEvent(formValues) {
    this.eventService.saveNewEvent(formValues);
    this.isDirty = false;
    this.router.navigateByUrl("/events");
  }
}
