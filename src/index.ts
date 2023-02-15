import './assets/style/normalize.min.css';
import uikit from 'uikit';
import { Plugin } from 'uikit/dist/js/uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import './main.scss';
import { App } from './components/app/App';
import i18next from 'i18next';
import enLang from './assets/langs/en.json';
import ruLang from './assets/langs/ru.json';

uikit.use(Icons as Plugin);

i18next.init({
    lng: 'en',
    debug: true,
    resources: {
        en: enLang,
        ru: ruLang,
    },
});

const app = new App();
app.run();
