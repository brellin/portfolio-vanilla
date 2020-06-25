import home from './home.js';
import about from './about.js';
import work from './work.js';
import activity from './activity.js';

const path = window.location.pathname
    .split('/')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).replace('.html', ''))
    .join(' ');
document.querySelector('title').innerText = `Will Umstead${ path !== ' ' ? '- ' + path : '' }`;

const routes = { home, about, work, activity };

export { routes };
