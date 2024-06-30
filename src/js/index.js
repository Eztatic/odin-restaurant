import home from './home.js';
import menu from './menu.js';
import location from './location.js';
import about from './about-us.js';

const mainContent = document.querySelector('#content');
const nav = document.querySelector('header nav');

nav.addEventListener('click', (e) => {
      let btn = e.target;

      mainContent.innerHTML = '';
      switch(btn.id) {
            case 'home-btn':
                  mainContent.appendChild(home);
                  break;
            case 'menu-btn':
                  mainContent.appendChild(menu);
                  break;
            case 'location-btn':
                  mainContent.appendChild(location);
                  break;
            case 'about-btn':
                  mainContent.appendChild(about);
                  break;
      }
})