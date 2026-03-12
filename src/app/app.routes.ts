import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';

export const routes: Routes = [
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    }
];
