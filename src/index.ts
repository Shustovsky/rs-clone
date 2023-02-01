import './assets/style/normalize.min.css';
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js';
import 'uikit/dist/js/uikit-icons.min.js';
import './main.scss';
import { App } from './components/app/App';

const app = new App();
app.run();
