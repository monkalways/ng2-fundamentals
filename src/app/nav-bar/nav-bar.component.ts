import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../shared/event.model';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  searchTerm: string;
  foundSessions: ISession[];

  constructor(private authService: AuthService, private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }

}
