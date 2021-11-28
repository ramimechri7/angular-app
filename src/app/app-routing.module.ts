import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomenComponent } from './homen/homen.component';
import {ErrorpageComponent} from './errorpage/errorpage.component';
 

const routes: Routes = [

{ 
  path:"list",
  component:HomeComponent
},
{
  path:"create",
  component:HomenComponent
},

{
  path: '',  
 redirectTo: 'list', 
 pathMatch: 'full' 
},
{
  path:"**",
  component:ErrorpageComponent

} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
