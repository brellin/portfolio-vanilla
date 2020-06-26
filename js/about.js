const header = document.createElement('h1');
header.innerText = 'About';

const me = document.createElement('img');
me.src = '/images/will.jpg';

const aboutText = document.createElement('p');
aboutText.innerText = `Hi! My name is Will. I started working with HTML, CSS, and PHP in 2008 during the summer of my sophomore year when I was in high school.

I taught my webmastering class the following two years, made a website, and never did anything with it. Shortly after, I joined the army, went to South Korea, and realized that computer languages aren't the only type that I'm good at learning.

내가 한국말 좋금 알아요. (Korean)

私は日本語を話します。(Japanese)

Ich spreche ein Wenig Deutsch. (German)

I decided to go to college to pursue this new world of interests, just to find that the school that I was accepted to made the executive decision to drop all of the non-basic language classes that I was wishing to pursue.

Now, here I am - engaging with a delightful school known as Lambda School!

During my time at Lambda, I have been able to research, learn, and develop my programming skills. I have re-discovered my passion for problem solving and have been involved in as many projects as I can manage.

*applause*

*curtain closes*`;

export default [ header, me, aboutText ];
