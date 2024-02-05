import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {path: 'signup', loadComponent: () => import('./pages/sign-up/sign-up.component').then(mod => mod.SignUpComponent)},
    { path: '**', redirectTo: '/signup', pathMatch: 'full'}
];
