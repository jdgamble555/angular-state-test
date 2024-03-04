import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { createLoader } from './lib/create-loader';
import { HomeLoad } from './components/home/home.load';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: {
            data: createLoader(HomeLoad)
        }
    }
];
