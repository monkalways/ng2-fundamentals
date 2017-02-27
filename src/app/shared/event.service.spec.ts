/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventService } from './event.service';
import { Http } from '@angular/http';

describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventService, Http]
    });
  });

  // it('should ...', inject([EventService], (service: EventService) => {
  //   expect(service).toBeTruthy();
  // }));
});
