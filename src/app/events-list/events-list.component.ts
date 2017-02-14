import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../shared/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: any;
  constructor(private eventService: EventService,
    private toastrService: ToastrService,
    private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(name: string) {
    this.toastrService.info(name);
  }
}
