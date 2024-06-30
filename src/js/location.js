const locationSection = document.createElement('section');
locationSection.classList.add('location');

const title = document.createElement('p');
title.innerText = 'Locations';
title.classList.add('section-title');

const gmaps = document.createElement('iframe');
gmaps.src = 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d41862226.94625066!2d-138.03728547941975!3d-50.17857308594725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDjCsDUyJzM2LjAiUyAxMjPCsDIzJzM2LjAiVw!5e0!3m2!1sen!2sph!4v1719713172334!5m2!1sen!2sph';
gmaps.allowfullscreen = '';
gmaps.loading = 'lazy';
gmaps.referrerpolicy='no-referrer-when-downgrade';

locationSection.appendChild(title);
locationSection.appendChild(gmaps);

export default locationSection;



