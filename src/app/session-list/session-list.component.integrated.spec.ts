import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SessionListComponent } from './session-list.component';
import { AuthService } from '../user/auth.service';
import { VoterService } from '../shared/voter.service';
import { ISession } from '../shared/event.model';
import { UpvoteComponent } from '../upvote/upvote.component';
import { DurationPipe } from '../shared/duration.pipe';
import { CollapsibleWellComponent } from '../collapsible-well/collapsible-well.component';

describe('SessionListComponent (Integrated)', () => {
    let fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement;

    beforeEach(async(() => {
        let mockAuthService = {
            isAuthenticated: () => false,
            currentUser: {
                userName: 'john'
            }
        };
        let mockVoterService = {
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                // UpvoteComponent,
                // CollapsibleWellComponent,
                DurationPipe
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe('initial display', () => {

        it('should have the correct session title', () => {
            component.sessions = <ISession[]> [
                { id: 3, name: 'session 3', presenter: 'Joe', duration: 1, level: 'intermediate', abstract: 'abstract', voters: ['john', 'bob'] },
            ];
            component.filterBy = 'all';
            component.sortBy = 'name';
            
            component.ngOnChanges();
            fixture.detectChanges();

            expect(element.querySelector('[card-title]').textContent).toContain('session 3');
            expect(debugEl.query(By.css('[card-title]')).nativeElement.textContent).toContain('session 3');
        });
    });
});