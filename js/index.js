import { routes } from './nav.js';

// the main element to be reloaded
const main = document.querySelector('main');

// applies a callback function to each child of an element
const applyToEach = (el, cb) => { for (let i = 0; i < el.childElementCount; i++) cb(el.children[ i ]); };

// gives each link in nav an onclick
applyToEach(document.querySelector('nav'), el => {
    if (el.innerText !== 'Resume') el.onclick = e => {
        // prevents default navigation
        e.preventDefault();
        // moves to given page
        window.history.pushState(null, el.innerText, el.href);
        // always reload the page
        loadPage();
    };
});

// clears everything from within the given element
const clear = el => {
    const len = el.childElementCount;
    let i = 0;
    while (i < len) {
        el.removeChild(el.children[ 0 ]);
        i++;
    }
};

function loadPage() {
    // get and set the pathname to be without a '/' and capitalize first letter
    const path = window.location.pathname
        .split('/')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join('');
    // set the title of the page
    document.querySelector('title').innerText = `Will Umstead${ path ? ' - ' + path : '' }`;

    // clear what is currently in main
    clear(main);
    // clear the classList of main
    main.classList = [];
    // get the name of the current page
    const page = path ? path.toLowerCase() : 'home';
    // populate the classList of main with the current page
    main.classList.add(page);
    // remove all active classes from links
    applyToEach(document.querySelector('nav'), el => el.classList.remove('active'));
    // add active class to current page
    document.querySelector(`.${ page[ 0 ].toUpperCase() + page.slice(1) }`).classList.add('active');
    // if the name of the current page is in routes, append to main
    if (routes[ page ]) routes[ page ].forEach(el => main.appendChild(el));
}

// always load the current page
loadPage();
