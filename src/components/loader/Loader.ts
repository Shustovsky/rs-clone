export class Loader {
    public createLoader(): void {
        const root = <HTMLBodyElement>document.querySelector('#root');

        const loader = <HTMLElement>document.createElement('div');
        loader.className = 'mask-loader uk-flex uk-flex-center';
        loader.innerHTML = `<div uk-spinner='ratio: 4'></div>`;
        root.append(loader);
    }

    public deleteLoader(): void {
        document.querySelector(' #root .mask-loader')?.remove();
    }
}
