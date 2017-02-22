import { Injectable } from '@angular/core';
import { ISession } from './event.model';

@Injectable()
export class VoterService {

  constructor() { }

  addVoter(session: ISession, voter: string) {
    session.voters.push(voter);
  }

  deleteVoter(session: ISession, voter: string) {
    session.voters = session.voters.filter(v => v !== voter);
  }

  userHasVoted(session: ISession, voter: string) {
    return session.voters.some(v => v === voter);
  }

}
