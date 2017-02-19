import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/event.model';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {

  @Input() sessions: ISession[];

  @Input() filterBy: string;

  @Input() sortBy: string;
  
  filteredSessions: ISession[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortSessions(this.sortBy);
    }
  }

  filterSessions(filter) {
    if(filter === 'all') {
      this.filteredSessions = this.sessions.slice(0); // copy
    } else {
      this.filteredSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filter);
    }
  }

  sortSessions(sortBy) {
    if(sortBy === 'name') {
      this.filteredSessions.sort( (session1, session2) => session1.name.localeCompare(session2.name) );
    }

    if(sortBy === 'voters') {
      this.filteredSessions.sort( (session1, session2) => session1.voters.length - session2.voters.length );
    }
  }
}
