import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WorkoutFormComponent } from './add-workout/add-workout.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', component: WorkoutFormComponent },
  { path: 'workout-list', component: WorkoutListComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppComponent,
    AddWorkoutComponent,
    NgxPaginationModule,
    HomeComponent,
  ],
  bootstrap: []
})
export class AppModule { }
