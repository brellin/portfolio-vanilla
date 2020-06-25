const intro = document.createElement('div');
intro.classList.add('intro');
intro.innerHTML = `<h3>Hi, my name is</h3>
<h1>William Charles Umstead Junior</h1>
<h4>I'm a Full Stack Web Developer</h4>`;

const skills = document.createElement('div');
skills.classList.add('skills');
skills.innerHTML = `<h2>Specializing in:</h2>`;

export default [ intro, skills ];
