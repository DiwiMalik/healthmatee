import { Routes } from '@angular/router';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'workout-list',
    component: WorkoutListComponent
  },
  {
    path: '',
    redirectTo: 'add-workout',
    pathMatch: 'full'
  },
  {
    path: 'add-workout',
    component: AddWorkoutComponent
  }
  
];
