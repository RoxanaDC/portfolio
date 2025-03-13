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
