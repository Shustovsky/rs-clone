import { DatabaseReference, child, get } from '@firebase/database';
import { Workout, WorkoutWrapper } from '../../model/Workout';

export class WorkoutService {
    private readonly dbRef: DatabaseReference;

    constructor(dbRef: DatabaseReference) {
        this.dbRef = dbRef;
    }

    public fetchWorkouts(callback: (workouts: Workout[]) => void): void {
        get(child(this.dbRef, `workouts`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const workoutWrappers: WorkoutWrapper[] = this.createWorkoutWrapperArray(snapshot.val());
                    const workouts = workoutWrappers.map((workoutWrappers) => workoutWrappers.data);
                    callback(workouts);
                } else {
                    throw new Error('Workouts not found');
                }
            })
            .catch((error) => {
                console.error(error);
                throw new Error('Workouts not found');
            });
    }

    private createWorkoutWrapperArray(val: any): WorkoutWrapper[] {
        const workoutWrapperArray: WorkoutWrapper[] = [];
        for (const valKey in val) {
            workoutWrapperArray.push(val[valKey]);
        }
        return workoutWrapperArray;
    }
}
