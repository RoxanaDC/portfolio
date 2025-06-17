/* if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.remove('light-mode');
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.remove('dark-mode');
  document.body.classList.add('light-mode');
}

const projects = $('.projects');
$.ajax('./json/projects.json').then((data) => {
  data.forEach((project) => {
    const div = $("<div class='projets-section'>");
    div.html(`
      <h2>${project.title}</h2><br>
      <div class="text">${project.description}</div><br>
      <div class="group">
        <div class="projet-details center-link-project">
          
          <div class="text">
            Lors de la soutenance de ce projet, j'ai reçu l'évaluation suivante:<br><br> 
            "${project.evaluation}"
          </div>
          <div class="evaluator_code_ahref">
              <a href=${project.sitedeployed} target="_blank">
                <img src="./images/${project.image}" alt="${project.title}" loading="lazy" width="300" height="200" /><br><br>
              </a>


            <p>Evalué par:
              <a href="${project.evaluatorpage}" target="_blank">${project.evaluatorname}</a>
            </p>
            <p>Evaluateur OpenClassrooms</p>
            <p>---</p>
            <a href="${project.link}" target="_blank">
              Découvrez ${project.details} de ce projet sur ${project.hostedon}
            </a>
          </div>
        </div>
      </div>
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
      <img src="./images/${skill.image}" alt="${skill.skillname}" loading="lazy" width="10" height="10"/>
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
            class="clickable-image lazy-load" 
            src="./images/img_graphiste/${category}/${drawing.image}" 
            alt="${drawing.name}"
            loading="lazy"
            width="600"  
            height="400" 
          />
        </a>
      `);

      container.append(div);
    });
  });

  // 🚀 După ce AJAX a terminat, adăugăm observer-ul
  const images = document.querySelectorAll('.lazy-load');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Imagine vizibilă:', entry.target); // ✅ Verifică în consolă
          entry.target.classList.add('visible'); // Adaugă efectul fade-in
          observer.unobserve(entry.target); // Oprește observarea după ce imaginea s-a încărcat
        }
      });
    },
    { rootMargin: '100px' } // Încarcă imaginile cu 100px înainte să fie vizibile
  );

  images.forEach((img) => observer.observe(img));
});
 */

/* 1. TREBUIE PUS IN ----------- APP.JS ------- CARE SE AFLA IN ------- ALL PAGES HTML (INDEX(HOME) - DEV_WEB - GRAPHISTE)---------THEMELE DARK / LIGHT------------ */

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.remove('light-mode');
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.remove('dark-mode');
  document.body.classList.add('light-mode');
}

/* 2. TREBUIE PUS IN -----------APP_W.JS ----"W" FROM WEB---- CARE SE AFLA IN ---- DEV-WEB.HTML -------CARE CONTINE ---------- PROIECTELE WEB------- */
const projects = $('.projects');
$.ajax('./json/projects.json').then((data) => {
  data.forEach((project) => {
    const div = $("<div class='projets-section'>");
    div.html(`
      <h2>${project.title}</h2><br>
      <div class="text">${project.description}</div><br>
      <div class="group">
        <div class="projet-details center-link-project">
          
          <div class="text">
            Lors de la soutenance de ce projet, j'ai reçu l'évaluation suivante:<br><br> 
            "${project.evaluation}"
          </div>
          <div class="evaluator_code_ahref">
              <a href=${project.sitedeployed} target="_blank">
                <img src="./images/${project.image}" alt="${project.title}" loading="lazy" width="300" height="200" /><br><br>
              </a>


            <p>Evalué par:
              <a href="${project.evaluatorpage}" target="_blank">${project.evaluatorname}</a>
            </p>
            <p>Evaluateur OpenClassrooms</p>
            <p>---</p>
            <a href="${project.link}" target="_blank">
              Découvrez ${project.details} de ce projet sur ${project.hostedon}
            </a>
          </div>
        </div>
      </div>
    `);

    projects.append(div);
  });
});

/* 3. TREBUIE PUS IN -----------APP_H.JS --- "H" FROM HOME----- CARE SE AFLA IN ---- INDEX.HTML (HOME)----------CARE CONTINE -----------SKILLS (COMPETENTE)------ */
const cells = $('.cells');

$.ajax('./json/skills.json').then((data) => {
  data.forEach((skill) => {
    // Creăm un div pentru fiecare skill
    const div = $("<div class='cell'>");

    // Adăugăm conținutul HTML dinamic pentru fiecare skill
    div.html(`
      <img src="./images/${skill.image}" alt="${skill.skillname}" loading="lazy" width="10" height="10"/>
      <span>${skill.skillname}</span>
    `);

    // Adăugăm div-ul creat în secțiunea cu clasele 'skills'
    cells.append(div);
  });
});

/* 4. TREBUIE PUS IN -----------APP_G.JS --- "G" FROM GRAPHISTE----- CARE SE AFLA IN ---- GRAPHISTE.HTML----CARE CONTINE -----------DRAWINGS------- */

const categories = [
  'affiches',
  'caricatures',
  'compositions',
  'croquis',
  'idees',
  'lgbtq',
  'nus',
  'sculptures',
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
            class="clickable-image lazy-load" 
            src="./images/img_graphiste/${category}/${drawing.image}" 
            alt="${drawing.name}"
            loading="lazy"
            width="600"  
            height="400" 
          />
        </a>
      `);

      container.append(div);
    });
  });

  // 🚀 După ce AJAX a terminat, adăugăm observer-ul
  /*Acest cod implementează încărcarea leneșă pentru imagini, 
  îmbunătățind performanța paginii prin încărcarea imaginilor 
  doar atunci când sunt necesare. Folosind IntersectionObserver, 
  se evită încărcarea inutilă a imaginilor care nu sunt vizibile 
  în viewport, economisind lățime de bandă și resurse. */
  const images = document.querySelectorAll('.lazy-load');

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Imagine vizibilă:', entry.target); // ✅ Verifică în consolă
          entry.target.classList.add('visible'); // Adaugă efectul fade-in
          observer.unobserve(entry.target); // Oprește observarea după ce imaginea s-a încărcat
        }
      });
    },
    { rootMargin: '100px' } // Încarcă imaginile cu 100px înainte să fie vizibile
  );

  images.forEach((img) => observer.observe(img));
});
