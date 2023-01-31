import './assets/style/normalize.min.css';
import './main.scss';
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js';
import 'uikit/dist/js/uikit-icons';
import { App } from './pages/App';

import template from './h1.template.html';
// const template = require('./h1.template.html');
document.body.innerHTML = template;

const app = new App();
app.run();
