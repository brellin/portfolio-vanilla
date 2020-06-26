import { routes } from './nav.js';

const main = document.querySelector('main');

const applyToEach = (el, cb) => { for (let i = 0; i < el.childElementCount; i++) cb(el.children[ i ]); };

applyToEach(document.querySelector('nav'), el => {
    if (el.innerText !== 'Resume') el.onclick = e => {
        e.preventDefault();
        window.history.pushState(null, el.innerText, el.href);
        loadPage();
    };
});

const clear = el => {
    const len = el.childElementCount;
    let i = 0;
    while (i < len) {
        el.removeChild(el.children[ 0 ]);
        i++;
    }
};

function loadPage() {
    console.log(window.location.pathname);
    clear(main);
    const page = window.location.pathname.slice(1) === '' ? 'home' : window.location.pathname.slice(1);
    applyToEach(document.querySelector('nav'), el => el.classList.remove('active'));
    document.querySelector(`.${ page[ 0 ].toUpperCase() + page.slice(1) }`).classList.add('active');
    if (routes[ page ]) routes[ page ].forEach(el => main.appendChild(el));
}

loadPage();
