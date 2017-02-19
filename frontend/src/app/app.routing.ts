import { Routes, RouterModule } from '@angular/router';
import { FruitComponent } from './fruit/fruit.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'fruit',
        component: FruitComponent,
        canActivate: [AuthGuardService]
    },

    {
        path: 'list',
        component: FruitListComponent,
        canActivate: [AuthGuardService]
    }
];

export const routing = RouterModule.forRoot(appRoutes);
export const routedComponents = [HomeComponent, FruitComponent, FruitListComponent];
