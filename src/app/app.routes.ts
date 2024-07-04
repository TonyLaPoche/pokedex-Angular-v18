import { Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";

export const routes: Routes = [
    {pathMatch:'full',path:'',  redirectTo:'home'},
    {path:'home', component:HomeComponent},
];
