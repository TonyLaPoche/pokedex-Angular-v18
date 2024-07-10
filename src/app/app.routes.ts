import { Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {DetailsComponent} from "./views/pokemon/details/details.component";

export const routes: Routes = [
    {pathMatch:'full',path:'',  redirectTo:'home'},
    {path:'home', component:HomeComponent},
    {path:'pokemon/:id', component:DetailsComponent}
];
