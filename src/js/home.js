import bgImage from '../images/hero-background.jpg';

const heroSection = document.createElement('section');
heroSection.classList.add('hero');

const heroImg = new Image();
heroImg.src = bgImage;
heroImg.alt = 'donut-background';
heroImg.setAttribute('id', 'donut-bg');

const contents = document.createElement('div');
contents.classList.add('hero-contents');

const title = document.createElement('p');
title.innerText = 'Check out our Lovely Donuts';

const description = document.createElement('p');
description.innerText = 'These donuts are baked with love so start ordering now.';

const btn = document.createElement('button');
btn.innerText = 'Check Menu';

contents.appendChild(title);
contents.appendChild(description);
contents.appendChild(btn);

heroSection.appendChild(heroImg);
heroSection.appendChild(contents);

export default heroSection;
