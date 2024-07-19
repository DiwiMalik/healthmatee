import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { WorkoutListComponent } from '../workout-list/workout-list.component';

@Component({
  selector: 'app-workout-form',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})export class AddWorkoutComponent {
  workout = {
    username: '',
    workoutType: 'Cycling',
    workoutMinutes: null as number | null
  };

  constructor(private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
      workouts.push(this.workout);
      localStorage.setItem('workouts', JSON.stringify(workouts));
      this.router.navigate(['/workout-list']);
    }
  }
}