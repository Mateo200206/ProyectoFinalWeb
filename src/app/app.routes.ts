import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NavbarComponent } from './layout/navbar/navbar';

export const routes: Routes = [
    {
        path: "",
        component: NavbarComponent,
        children: [
            {
                path: "home",
                component: Home,
            }       
        ]
    }
];

