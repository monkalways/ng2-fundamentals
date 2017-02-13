import { Routes } from '@angular/router';

import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { PageNotFoundComponent } from './errors/page-not-found.component';
import { EventRouteActivator } from './event-details/event-route-activator.service';

export const appRoutes: Routes = [
    { 
        path: 'events',
        component: EventsListComponent
    },
    { 
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },
    { 
        path: 'events/:id',
        component: EventDetailsComponent,
        canActivate: [EventRouteActivator]
    },
    { 
        path: '404',
        component: PageNotFoundComponent
    },
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    }
];