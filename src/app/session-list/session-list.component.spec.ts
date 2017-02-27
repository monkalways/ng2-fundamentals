import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/event.model';

describe('SessionListComponent', () => {

    let component: SessionListComponent;
    let mockAuthService, mockVoterService;

    beforeEach(() => {
        component = new SessionListComponent(mockAuthService, mockVoterService);
    })

    describe('ngOnChanges()', () => {

        it('should filter the sessions correctly', () => {
            component.sessions = <ISession[]> [
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 2', level: 'beginner' },
                { name: 'session 3', level: 'intermediate' }
            ];
            component.filterBy = 'intermediate';
            component.sortBy = 'name';
            
            component.ngOnChanges();

            expect(component.filteredSessions.length).toBe(2);
        });

        it('should sort the sessions correctly', () => {
            component.sessions = <ISession[]> [
                { name: 'session 3', level: 'intermediate' },
                { name: 'session 2', level: 'beginner' },
                { name: 'session 1', level: 'intermediate' }
            ];
            component.filterBy = 'all';
            component.sortBy = 'name';
            
            component.ngOnChanges();

            expect(component.filteredSessions[0].name).toBe('session 1');
        });

    });
});