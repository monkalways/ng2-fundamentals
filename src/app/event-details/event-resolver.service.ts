import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IEvent } from '../shared/event.model';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventResolver implements Resolve<IEvent> {

  constructor(private eventService: EventService) { }

  resolve(routeSnapshot: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(+routeSnapshot.params['id']);
  }
}
