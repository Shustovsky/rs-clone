import { Section, Workout } from '../../../../model/Workout';
import './workoutSectionExercise.scss';

export class WorkoutSectionExerciseView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    public render(workout: Workout): void {
        const overviewWrapper = document.createElement('div');
        overviewWrapper.className = 'workout__wrapper-section-exercises';

        const sectionExercise = this.createSectionExercise(workout);

        overviewWrapper.append(sectionExercise);
        document.querySelector(this.selector)?.append(overviewWrapper);
    }

    private createSectionExercise(workout: Workout): HTMLElement {
        const exerciseWrapper = document.createElement('div');
        exerciseWrapper.className = 'workout__wrapper-exercises uk-flex uk-flex-column';

        const sections = workout.sections;
        sections.sort((a, b) => a.order - b.order);

        sections.forEach((section) => {
            const exerciseTitle = document.createElement('div');
            exerciseTitle.className = 'workout__exercise-title';
            const kind = this.getSectionKindText(section);
            exerciseTitle.textContent = `${kind}`;

            const exerciseSectionWrapper = document.createElement('div');
            exerciseSectionWrapper.className = 'workout__wrapper-section-exercise uk-flex';

            const exerciseSectionImgWrapper = document.createElement('div');
            exerciseSectionImgWrapper.className = 'workout__exercise-section';

            const exerciseSectionImg = this.createExerciseSectionImg(section);
            exerciseSectionImgWrapper.append(exerciseSectionImg);

            exerciseSectionWrapper.append(exerciseTitle);
            exerciseSectionWrapper.append(exerciseSectionImgWrapper);
            exerciseWrapper.append(exerciseSectionWrapper);
        });
        return exerciseWrapper;
    }

    private createExerciseSectionImg(section: Section): HTMLElement {
        const exerciseSectionWrapper = document.createElement('div');
        exerciseSectionWrapper.className = 'workout__exercise-section-item uk-flex uk-flex-column';

        section.exercises.forEach((item) => {
            const exerciseSectionItemWrapper = document.createElement('div');
            exerciseSectionItemWrapper.className = 'workout__exercise-block uk-flex';

            const exerciseDescription = document.createElement('div');
            exerciseDescription.className = 'workout__description-exercise uk-flex uk-flex-column uk-flex-center';

            const exerciseTitle = document.createElement('div');
            exerciseTitle.className = 'workout__description-exercise-text';
            exerciseTitle.textContent = item.title;
            exerciseDescription.append(exerciseTitle);

            const exerciseTime = document.createElement('div');
            exerciseTime.className = 'workout__exercise-time';
            exerciseTime.textContent = `${item.amount} SEC`;
            exerciseDescription.append(exerciseTime);

            const wrapperSectionImg = document.createElement('div');
            wrapperSectionImg.className = 'workout__wrapper-section-img';

            const img = item.imageUrl;
            const exerciseImg = document.createElement('img');
            exerciseImg.src = img;
            exerciseImg.className = 'workout__section-img';

            wrapperSectionImg.append(exerciseImg);
            exerciseSectionItemWrapper.append(wrapperSectionImg);
            exerciseSectionItemWrapper.append(exerciseDescription);

            exerciseSectionWrapper.append(exerciseSectionItemWrapper);
        });
        return exerciseSectionWrapper;
    }

    private getSectionKindText(section: Section) {
        switch (section.kind) {
            case 'warm_up':
                return 'Warm Up';
            case 'circuit':
                return 'Circuit';
            case 'cool_down':
                return 'Cool Down';
        }
    }
}
