import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GyosuComponent } from './components/gyosu/gyosu.component';
import { CalComponent } from './components/cal/cal.component';
import { IsComponent } from './components/is/is.component';
import { WriteComponent } from './components/write/write.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
{path: "", component:HomeComponent },
{path:'navbar', component: NavbarComponent},
{path:'login', component: LoginComponent},
{path:'register', component: RegisterComponent},
{path:'dashboard', component: DashboardComponent},
{path:'profile', component: ProfileComponent},
{path:'gyosu', component: GyosuComponent},
{path:'cal', component: CalComponent},
{path:'is', component: IsComponent},
{path:'write', component: WriteComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
