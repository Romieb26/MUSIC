import { Routes } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MenuComponent } from './component/menu/menu.component';

export const routes: Routes = [

    {path:'', component:NavbarComponent},
    {path:'menu', component:MenuComponent}
];
