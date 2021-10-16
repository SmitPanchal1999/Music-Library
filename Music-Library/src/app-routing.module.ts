import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DelsongComponent } from './delsong/delsong.component';
import { UpdatesongComponent } from './updatesong/updatesong.component';


const routes: Routes = [
  { path: 'register',
  component: RegisterComponent
},
{ path: 'login',
  component: LoginComponent
},
{ path: 'admin',
  component: AdminComponent
},
{ path: 'delsong',
  component: DelsongComponent
},
{ path: 'updatesong',
component: UpdatesongComponent
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
