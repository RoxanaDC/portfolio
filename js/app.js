/* $ for jquery 
i whant that has a class = projects*/
const projects = $('.projects');

$.ajax('./json/projects.json').then((data) => {
  data.forEach((project) => {
    'project';
    const div = $("<div class ='projets-section'>");
    div.html(`<h2>${project.title}</h2><br>
        <div class="text">${project.description}</div><br>
        <div class="group">
        <div class="projet-details">
        <img src="./images/${project.image}" alt="${project.title}" /><br><br>

        <div class="text">Lors de la soutenance de ce projet, j'ai reçu l'évaluation suivante:<br><br> "${project.evaluation}"</div>
                <p>---</p>

        <p>Evalué par:
        <a href="${project.evaluatorpage}" target="_blank">${project.evaluatorname}</a>

        
        <p>Evaluateur OpenClassrooms</p>
        <p>---</p>


        <a href="${project.link}" target="_blank">Découvrez ${project.details} de ce projet sur ${project.hostedon}</a>
        </div></div>

        `);

    projects.append(div);
  });
});
