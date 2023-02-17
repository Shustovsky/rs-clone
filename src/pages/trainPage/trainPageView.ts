import trainLogo from './trainPage.html';
import { Exercise, Workout } from '../../model/Workout';
import './trainPage.scss';

export class TrainPageView {
    private workout: Workout | null = null;
    private currentExercise: Exercise | null = null;
    private nextExercise: Exercise | null = null;

    public render(workout: Workout): void {
        this.init(workout);
        const root = <HTMLBodyElement>document.querySelector('#root');

        const main = document.createElement('main');
        main.className = 'train uk-flex uk-flex-center uk-flex-middle';
        root.append(main);

        const trainContainer = <HTMLDivElement>document.createElement('div');
        trainContainer.className = 'train__container ';
        trainContainer.innerHTML = trainLogo;
        main.append(trainContainer);

        this.leaveWorkoutBtn(workout.id);

        this.createDescriptionBlock();
    }

    private leaveWorkoutBtn(id: string) {
        const btn = <HTMLDivElement>document.querySelector('.train__back');
        btn.addEventListener('click', () => {
            history.pushState('', '', `/workout/${id}`);
            window.dispatchEvent(new Event('refreshPage'));
        });
    }

    private init(workout: Workout): void {
        this.workout = workout;
        this.currentExercise = this.getInitialExercise(workout);
        this.nextExercise = this.getNextExercise(workout);
    }

    private getInitialExercise(workout: Workout): Exercise {
        const sections = workout.sections;
        sections.sort((a, b) => a.order - b.order);
        const exercises = sections[0].exercises;
        exercises.sort((a, b) => a.order - b.order);
        return exercises[0];
    }

    private getNextExercise(workout: Workout): Exercise {
        const exercises = workout.sections
            .sort((a, b) => a.order - b.order)
            .map((value) => value.exercises.sort((a, b) => a.order - b.order))
            .flat();

        const currentExercise = <Exercise>this.currentExercise;
        const currentExerciseIndex = exercises.indexOf(currentExercise);
        return exercises[currentExerciseIndex + 1];
    }

    private createDescriptionBlock(): void {
        const trainContainer = document.querySelector('#root .train__container');

        const wrapperDescription = <HTMLElement>document.createElement('div');
        wrapperDescription.className = 'train__wrapper-description uk-flex uk-flex-center ';
        trainContainer?.append(wrapperDescription);

        this.createInfoBlock();
        this.createMediaWrapper();
        this.createNextExerciseBlock();
    }

    private createInfoBlock(): void {
        const exercise = <Exercise>this.currentExercise;
        const wrapperDescription = document.querySelector('#root .train__wrapper-description');

        const info = <HTMLElement>document.createElement('div');
        info.className = 'train__info uk-flex uk-flex-column uk-flex-middle uk-flex-center';

        const exerciseTitle = <HTMLElement>document.createElement('div');
        exerciseTitle.className = 'train__exercise-title';
        exerciseTitle.innerHTML = `${exercise.title}`;
        info.append(exerciseTitle);

        const infoContent = <HTMLElement>document.createElement('div');
        infoContent.className = 'train__info-content';
        infoContent.innerHTML = `${exercise.amount} SEC`;
        info.append(infoContent);

        wrapperDescription?.append(info);
    }

    private createMediaWrapper(): void {
        const exercise = <Exercise>this.currentExercise;
        const wrapperDescription = document.querySelector(' #root .train__wrapper-description');

        if (exercise.videoUrl) {
            const mediaWrapper = <HTMLElement>document.createElement('div');
            mediaWrapper.className = 'train__wrapper-media uk-flex uk-flex-center';
            mediaWrapper.innerHTML = `<video class='train__video' src='${exercise.videoUrl}' controls playsinline uk-video></video>`;
            wrapperDescription?.append(mediaWrapper);
        } else {
            const mediaWrapper = <HTMLElement>document.createElement('div');
            mediaWrapper.className = 'train__wrapper-media uk-flex uk-flex-center';
            mediaWrapper.innerHTML = `<img class='train__video' src='${exercise.imageUrl}' alt='exercise'>`;
            wrapperDescription?.append(mediaWrapper);
        }
    }

    private createNextExerciseBlock(): void {
        const wrapperDescription = document.querySelector('#root .train__wrapper-description');

        const nextExercise = <HTMLElement>document.createElement('div');
        nextExercise.className = 'train__next-exercise uk-flex uk-flex-column ';

        if (this.nextExercise) {
            const nextExerciseText = <HTMLElement>document.createElement('div');
            nextExerciseText.className = 'train__next-exercise-text';
            nextExerciseText.textContent = 'next up:';
            nextExercise.append(nextExerciseText);

            const nextExerciseDescriptionBlock = this.createNextExerciseDescriptionBlock();
            nextExercise.append(nextExerciseDescriptionBlock);
        }
        wrapperDescription?.append(nextExercise);
    }

    private createNextExerciseDescriptionBlock(): HTMLElement {
        const exercise = <Exercise>this.nextExercise;

        const nextExerciseDescriptionBlock = <HTMLElement>document.createElement('div');
        nextExerciseDescriptionBlock.className = 'train__next-exercise-description-block uk-flex uk-flex-middle';

        nextExerciseDescriptionBlock.addEventListener('click', () => {
            this.currentExercise = this.nextExercise;
            const workout = <Workout>this.workout;
            this.nextExercise = this.getNextExercise(workout);
            this.reRender();
        });

        nextExerciseDescriptionBlock.innerHTML = `
                            <div  class='train__next-exercise-wrapper-img'>
                                <img class='train__next-exercise-img' src='${exercise.imageUrl}' alt='next exercise'>
                            </div>
                            <div class='train__next-exercise-description'>
                                <div class='train__next-exercise-title'>${exercise.title}</div>
                                <div class='train__next-info-content'>${exercise.amount} SEC</div>
                            </div>`;

        return nextExerciseDescriptionBlock;
    }

    private reRender(): void {
        document.querySelector('#root .train__wrapper-description')?.remove();
        this.createDescriptionBlock();
    }
}
