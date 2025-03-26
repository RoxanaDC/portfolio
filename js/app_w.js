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
          
          <div class="text evaluation_com"><h3>
            Lors de la soutenance de ce projet, j'ai reçu l'évaluation suivante:</h3> 
            "${project.evaluation}"
          </div>
          <div class="container_pt_evaluator_image" >
            <div class="evaluator_code_ahref"><br>
                        <p>Projet validé le <strong>${project.validation_date}</strong> par:
              <a href="${project.evaluatorpage}" target="_blank">${project.evaluatorname}</a>
              </p>
             <p>Evaluateur OpenClassrooms</p><br><br>


              <a href=${project.sitedeployed} target="_blank">

                <img src="./images/${project.image}" alt="${project.title}" loading="lazy" />
              </a>
             </div>
          </div>
        </div>
      </div>
                  

    `);

    projects.append(div);
  });
});
