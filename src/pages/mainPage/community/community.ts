import { communityTemplate } from './communityTemplate';
import './community.scss';

export class Community {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    render(): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const container = document.createElement('div');
        container.innerHTML = communityTemplate();
        root.append(container);
    }
}
