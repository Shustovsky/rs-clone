import './assets/style/normalize.min.css';
import 'uikit/dist/css/uikit.min.css';
import uikit from 'uikit';
import { Plugin } from 'uikit/dist/js/uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import './main.scss';
import { App } from './components/app/App';

uikit.use(Icons as Plugin);

const app = new App();
app.run();
