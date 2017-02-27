/* tslint:disable:no-unused-variable */

import { VoterService } from './voter.service';
import { Observable } from 'rxjs/RX';
import { ISession } from './event.model';
import { Response, ResponseOptions } from '@angular/http';

describe('VoterService', () => {
  
  let voterService: VoterService,
      mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('should remove the voter from the list of voters', () => {
      var session = { id: 1, voters: ['joe', 'john'] };

      let response: Response = new Response(
        new ResponseOptions({})
      );

      mockHttp.delete.and.returnValue(Observable.of(response));

      voterService.deleteVoter(<ISession>session, 'joe');

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('john');
    });

    it('should call http.delete with the right URL', () => {
      var session = { id: 1, eventId: 2, voters: ['joe', 'john'] };

      let response: Response = new Response(
        new ResponseOptions({})
      );

      mockHttp.delete.and.returnValue(Observable.of(response));

      voterService.deleteVoter(<ISession>session, 'joe');

      expect(mockHttp.delete).toHaveBeenCalledWith('http://localhost:35618/api/events/2/sessions/1/voters/joe', null);
    });
  });

  describe('addVoter', () => {

    it('should call http.post with the right URL', () => {
      var session = { id: 1, eventId: 2, voters: ['john'] };

      let response: Response = new Response(
        new ResponseOptions({})
      );

      mockHttp.post.and.returnValue(Observable.of(response));

      voterService.addVoter(<ISession>session, 'joe');

      expect(mockHttp.post).toHaveBeenCalledWith('http://localhost:35618/api/events/2/sessions/1/voters?newvoter=joe', null);
    });

  });

});
