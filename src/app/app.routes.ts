import { Routes } from '@angular/router';

export const routes: Routes = [
    //default route
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },

    //lazy loaded other pages
    {
        path: 'home',
        loadComponent: () => import('./pages/home-page/home-page').then(m => m.HomePage)
    },
    {
        path: 'experience',
        loadComponent: () => import('./pages/experience/experience').then(m => m.Experience)
    },
    {
        path: 'projects',
        loadComponent: () => import('./pages/projects/projects').then(m => m.Projects)
    },
    {
        path: 'skills',
        loadComponent: () => import('./pages/skills/skills').then(m => m.Skills)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then(m => m.About)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/home-page/home-page').then(m => m.HomePage)
    }
];
