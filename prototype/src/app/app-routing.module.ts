import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './pages/home/home.component';
import { IntermediaryComponent } from './pages/intermediary/intermediary.component';
import { DetailsComponent } from './pages/details/details.component';
import { FullreportComponent } from './pages/fullreport/fullreport.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'intermediary', component: IntermediaryComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'full', component: FullreportComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}