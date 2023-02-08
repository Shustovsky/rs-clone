import { Section, Workout } from '../../../../model/Workout';

export class WorkoutOverview {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    public render(workout: Workout): void {
        const overviewWrapper = document.createElement('div');
        overviewWrapper.className = 'workout__wrapper-overview';

        const overviewTitle = document.createElement('div');
        overviewTitle.className = 'workout__wrapper-overview';
        overviewTitle.textContent = 'overview';

        overviewWrapper.append(overviewTitle);

        const sectionWrapper = this.createSections(workout);
        overviewWrapper.append(sectionWrapper);
    }


    public createSections(workout: Workout): HTMLElement {
        const sectionWrapper = document.createElement('div');
        sectionWrapper.className = 'workout__wrapper-section';

        const sections = workout.sections;
        sections.sort((a, b) => a.order - b.order);

        console.log(sections);

        sections.forEach((section) => {
            let sectionElement = this.createSection(section);
            sectionWrapper.append(sectionElement);
        });
        return sectionWrapper;
    }

    createSection(section: Section): HTMLElement {
        const duration = Math.round(section.duration / 60);
        // const imgSrc = `../../../../src/assets/icons/${section.kind}.svg`;

        const imgSrc = '../../../../src/assets/icons/circuit.svg';

        const kind = section.kind === 'warm_up'? 'Warm Up'
            : section.kind === 'circuit' ? 'Circuit' : 'Cool Down'

        const sectionElement = document.createElement('div');
        sectionElement.innerHTML = `<div>
                                        <img src=${imgSrc} alt='#'>
                                    </div>
                                    <div>палочка</div>
                                    <div>
                                         <div>${kind}</div>
                                         <div>${duration}</div>
                                    </div>`;
        return sectionElement;
    }
}