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
