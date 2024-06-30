import { LoremIpsum } from 'lorem-ipsum';

const aboutSection = document.createElement('section');
aboutSection.classList.add('about-us');

const title = document.createElement('p');
title.classList.add('section-title');
title.innerText = 'About Us';

const txtContainer = document.createElement('div');
txtContainer.classList.add('about-us-cont');

const txtContent = document.createElement('p');
const randomTxt = new LoremIpsum();
txtContent.innerText = randomTxt.generateWords(100);

txtContainer.appendChild(txtContent);

aboutSection.appendChild(title);
aboutSection.appendChild(txtContainer);

export default aboutSection;
