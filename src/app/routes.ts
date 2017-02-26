import { Routes } from '@angular/router';

import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import { EventsListResolverService } from './shared/events-list-resolver.service';
import { TestComponent } from './test/test.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { EventResolver } from './event-details/event-resolver.service';

export const appRoutes: Routes = [
    { 
        path: 'events',
        component: EventsListComponent,
        resolve: { events: EventsListResolverService }
    },
    { 
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },
    { 
        path: 'events/:id',
        component: EventDetailsComponent,
        resolve: { event: EventResolver }
    },
    {
        path: 'events/session/new',
        component: CreateSessionComponent
    },
    { 
        path: '404',
        component: PageNotFoundComponent
    },
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    },
    {
        path: 'user',
        loadChildren: 'app/user/user.module#UserModule'
    }
];