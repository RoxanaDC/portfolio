const projects = $('.projects');

$.ajax('./json/projects.json').then((data) => {
  data.forEach((project) => {
    'project';
    const div = $("<div class ='projets-section'>");
    div.html(`<h2>${project.title}</h2><br>
        <div class="text">${project.description}</div><br>
        <div class="group">
        <div class="projet-details">
<a href=${project.sitedeployed} target="_blank">
        <img src="./images/${project.image}" alt="${project.title}" loading="lazy"/><br><br>
</a>
        <div class="text">Lors de la soutenance de ce projet, j'ai reçu l'évaluation suivante:<br><br> "${project.evaluation}"</div>
                <p>---</p>

        <p>Evalué par:
        <a href="${project.evaluatorpage}" target="_blank">${project.evaluatorname}</a> </p>

        
        <p>Evaluateur OpenClassrooms</p>
        <p>---</p>


        <a href="${project.link}" target="_blank">Découvrez ${project.details} de ce projet sur ${project.hostedon}</a>
        </div></div>

        `);

    projects.append(div);
  });
});

const cells = $('.cells');

$.ajax('./json/skills.json').then((data) => {
  data.forEach((skill) => {
    // Creăm un div pentru fiecare skill
    const div = $("<div class='cell'>");

    // Adăugăm conținutul HTML dinamic pentru fiecare skill
    div.html(`
      <img src="./images/${skill.image}" alt="${skill.skillname}" loading="lazy"/>
      <span>${skill.skillname}</span>
    `);

    // Adăugăm div-ul creat în secțiunea cu clasele 'skills'
    cells.append(div);
  });
});

const categories = [
  'affiches',
  'caricatures',
  'compositions',
  'croquis',
  'idees',
  'lgbtq',
  'nus',
  'paysages',
  'photos',
  'portraits',
  'reproductions',
  'retouches',
  'vectors',
];

$.ajax('./json/drawings.json').then((data) => {
  categories.forEach((category) => {
    const container = $(`#${category} .items`);

    data[category].forEach((drawing) => {
      const div = $("<div class='cell'>");

      div.html(`
        <a
          href="./images/img_graphiste/${category}/${drawing.image}" 
          data-lightbox="${category}" 
          data-title="${drawing.name}">
          <img
            data-src="./images/img_graphiste/${category}/${drawing.image}" 
            alt="${drawing.name}" 
            class="clickable-image lazy-load" 
            />
        </a>
      `);

      container.append(div);
    });
  });

  const images = document.querySelectorAll('.lazy-load');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // Setează src-ul din data-src
          img.classList.add('fade-in'); // Adaugă o tranziție
          observer.unobserve(img); // Oprește observarea imaginii
        }
      });
    },
    { rootMargin: '50px' }
  ); // Se încarcă cu 50px înainte de vizibilitate

  images.forEach((img) => observer.observe(img));
});
