import { DatabaseReference, child, get } from '@firebase/database';
import { Workout, WorkoutWrapper } from '../model/Workout';

export class WorkoutService {
    private readonly dbRef: DatabaseReference;

    constructor(dbRef: DatabaseReference) {
        this.dbRef = dbRef;
    }

    public fetchWorkouts(): Promise<Workout[]> {
        return get(child(this.dbRef, `workouts`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    return this.mapperWorkoutWrapperRecordsToWorkout(snapshot.val());
                } else {
                    throw new Error('Workouts not found');
                }
            })
            .catch((error) => {
                console.error(error);
                throw new Error('Fetch workouts from DB failed.');
            });
    }

    private mapperWorkoutWrapperRecordsToWorkout(records: Record<string, WorkoutWrapper>): Workout[] {
        return Object.values(records).map((workoutWrappers) => workoutWrappers.data);
    }
}
