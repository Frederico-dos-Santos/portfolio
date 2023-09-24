import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  { path: 'app-principal', component: PrincipalComponent },
  { path: 'app-experience', component: ExperienceComponent },
  { path: '', redirectTo: 'app-principal', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
