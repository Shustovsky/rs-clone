import { Section, Workout } from '../../../../model/Workout';
import './overview.scss';
import circuit from '../../../../../src/assets/icons/circuit.svg';
import warmUp from '../../../../../src/assets/icons/warm_up.svg';
import coolDown from '../../../../../src/assets/icons/cool_down.svg';

export class WorkoutOverview {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    public render(workout: Workout): void {
        const overviewWrapper = document.createElement('div');
        overviewWrapper.className = 'workout__wrapper-overview';

        const overviewTitle = document.createElement('div');
        overviewTitle.className = 'workout__overview-title';
        overviewTitle.textContent = 'overview';

        overviewWrapper.append(overviewTitle);

        const sectionWrapper = this.createSections(workout);
        overviewWrapper.append(sectionWrapper);

        document.querySelector(this.selector)?.append(overviewWrapper);
    }

    private createSections(workout: Workout): HTMLElement {
        const sectionWrapper = document.createElement('div');
        sectionWrapper.className = 'workout__wrapper-section';

        const sections = workout.sections;
        sections.sort((a, b) => a.order - b.order);

        console.log(sections);

        sections.forEach((section) => {
            const sectionElement = this.createSection(section);
            sectionWrapper.append(sectionElement);
        });
        return sectionWrapper;
    }

    private createSection(section: Section): HTMLElement {
        const duration = Math.round(section.duration / 60);
        const imgSrc = this.getSectionKindImg(section);
        const kind = this.getSectionKindText(section);

        const sectionElement = document.createElement('div');
        sectionElement.className = 'workout__section uk-flex';
        sectionElement.innerHTML = `<div>
                                        <img src='${imgSrc}' alt='${section.kind}'>
                                    </div>
                                    <div class='workout__line ${section.kind} uk-flex'></div>
                                    <div class='workout__wrapper-time'>
                                         <div class='workout__time-text'>${kind}</div>
                                         <div class='workout__section-time'>${duration} MIN</div>
                                    </div>`;
        return sectionElement;
    }

    private getSectionKindImg(section: Section) {
        switch (section.kind) {
            case 'warm_up':
                return warmUp;
            case 'circuit':
                return circuit;
            case 'cool_down':
                return coolDown;
        }
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
