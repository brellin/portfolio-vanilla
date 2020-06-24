const path = window.location.pathname.split('/').map(w => w.charAt(0).toUpperCase() + w.slice(1).replace('.html', '')).join(' ');
document.querySelector('title').innerText = `Will Umstead${ path !== ' ' ? '- ' + path : '' }`;

const routes = [
    {
        text: "Home",
        link: "/"
    },
    {
        text: "About",
        link: "/about.html"
    },
    {
        text: "Work",
        link: "/work.html"
    },
    {
        text: "Resume",
        link: "https://docs.google.com/document/d/1jRMkE040orW6gBoYssTHJ7g8s8VN3OPtYTF-fz_EYII"
    },
];

const nav = document.querySelector('nav');
routes.forEach(route => {
    const el = document.createElement('a');
    el.innerText = route.text;
    el.href = route.link;
    if (/https/.test(route.link)) el.setAttribute('target', '_blank');
    nav.appendChild(el);
});
