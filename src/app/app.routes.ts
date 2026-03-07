import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Bulbasaur } from './components/bulbasaur/bulbasaur';
import { Ivysaur } from './components/ivysaur/ivysaur';
import { Venusaur } from './components/venusaur/venusaur';
import { Level } from './components/level/level';


export const routes: Routes = [
    {path: '', component: Home},
    {path: 'home', component: Home},
    {path: 'bulbasaur', component: Bulbasaur},
    {path: 'ivysaur', component: Ivysaur},
    {path: 'venusaur', component: Venusaur},
    {path: 'bulbasaur/:level', component: Level},
    {path: '**', component: Home}

];
