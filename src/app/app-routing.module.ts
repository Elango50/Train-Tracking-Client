import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindTrainComponent } from './find-train/find-train.component';
import { LiveTrainLocationComponent } from './live-train-location/live-train-location.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: 'find-train', component: FindTrainComponent },
    { path: 'live-train', component: LiveTrainLocationComponent },
    { path: 'app-home', component: HomeComponent },
    { path: '',   redirectTo: '/app-home', pathMatch: 'full' }, // redirect to `find-train`
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
