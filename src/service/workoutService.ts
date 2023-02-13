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
                    return this.mapWorkoutWrapperRecordsToWorkout(snapshot.val());
                } else {
                    throw new Error('Workouts not found');
                }
            })
            .catch((error) => {
                console.error(error);
                throw new Error('Fetch workouts from DB failed.');
            });
    }

    public fetchWorkout(id: string): Promise<Workout> {
        return get(child(this.dbRef, `workouts/${id}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    let record = <WorkoutWrapper>snapshot.val();
                    return record.data;
                } else {
                    throw new Error('Workout not found');
                }
            })
            .catch((error) => {
                console.error(error);
                throw new Error(`Fetch workout: ${id}, from DB failed.`);
            });
    }

    private mapWorkoutWrapperRecordsToWorkout(records: Record<string, WorkoutWrapper>): Workout[] {
        return Object.values(records).map((workoutWrappers) => workoutWrappers.data);
    }
}
