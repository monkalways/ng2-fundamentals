import { Injectable } from '@angular/core';
import { ISession } from './event.model';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/RX';

@Injectable()
export class VoterService {

  constructor(private http: Http) { }

  addVoter(session: ISession, voter: string): void {
    session.voters.push(voter);
    this.http.post(`http://localhost:35618/api/events/${session.eventId}/sessions/${session.id}/voters?newvoter=${voter}`, null)
      .map(response => <ISession>response.json()).subscribe();
  }

  deleteVoter(session: ISession, voter: string): void {
    session.voters = session.voters.filter(v => v !== voter);
    this.http.delete(`http://localhost:35618/api/events/${session.eventId}/sessions/${session.id}/voters/${voter}`, null)
      .map(response => <ISession>response.json()).subscribe();
  }

  getVoters(session: ISession): Observable<string[]> {
    return this.http.get(`http://localhost:35618/api/events/${session.eventId}/sessions/${session.id}/voters`)
      .map(response => <string[]>response.json());
  }

}
