import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './user/create/create.component';
import { EditComponent } from './user/edit/edit.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  
  {path:'users',component:UserComponent},
  {path:'users/create',component:CreateComponent},
  {path:'users/edit/:id',component:EditComponent}

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
