import projects from '../images/projects/index.js';

const pHeader = document.createElement('h2');
pHeader.innerText = 'Projects';

const projectsDiv = document.createElement('div');
projectsDiv.classList.add('projects');
projectsDiv.appendChild(pHeader);

projects.forEach(proj => {
    const h2 = document.createElement('h2');
    h2.innerText = proj.name;
    h2.onclick = _ => window.open(proj.link);

    const p = document.createElement('p');
    p.innerText = proj.text;
    p.onclick = _ => window.open(proj.link);

    const a = document.createElement('a');
    a.href = proj.repo;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.onclick = e => e.stopPropagation();
    a.innerText = 'View the Code';

    const div = document.createElement('div');
    div.classList.add('Project');
    div.classList.add(proj.title);

    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(a);
    projectsDiv.appendChild(div);
});

export default [ projectsDiv ];
