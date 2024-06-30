const menuSection = document.createElement('section');
menuSection.classList.add('menu');

const title = document.createElement('p');
title.innerText = 'Doughnaut Menu';
title.classList.add('section-title');

const imagePaths = [
      {src: require('../images/bavarian.png'), alt: 'bavarian-donuts' },
      {src: require('../images/special-donuts.png'), alt: 'special-donuts' },
      {src: require('../images/glazed-donuts.png'), alt: 'glazed-donuts' },
      {src: require('../images/classic-donut.png'), alt: 'classic-donuts' },
      {src: require('../images/donut-holes.png'), alt: 'donut-holes' },
      {src: require('../images/dunkers.png'), alt: 'bavarian-dunkers' },
]

const labels = [
      "Bavarian Donuts",
      "Bakery's Special",
      "Glazed Donuts",
      "Classic Donuts",
      "Donut Holes",
      "Dunkers",
]

const menuContainer = document.createElement('div');
menuContainer.classList.add('donut-cont');

for(let i = 0; i < 6; i++) {
      const div = document.createElement('div');
      const img = new Image();
      img.src = imagePaths[i].src;
      img.alt = imagePaths[i].alt;
      const label = document.createElement('p');
      label.innerText = labels[i];

      div.appendChild(img);
      div.appendChild(label);

      menuContainer.appendChild(div);
}

menuSection.appendChild(title);
menuSection.appendChild(menuContainer);

export default menuSection;