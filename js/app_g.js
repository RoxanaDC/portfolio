/* 4. TREBUIE PUS IN -----------APP_G.JS --- "G" 
FROM GRAPHISTE----- CARE SE AFLA IN ---- GRAPHISTE.HTML----
CARE CONTINE -----------DRAWINGS------- */

const categories = [
  'conception_graphique',
  'mise_en_page',
  'vectors',
  'impression',
  'caricatures',
  'diverses',
  'croquis',
  'lgbtq',
  'nus1',
  'nus2',
  'photos',
  'portraits',
  'reproductions',
  'bd',
];

/* $.ajax('./json/drawings.json').then((data) => {
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


  
 */

$.ajax('./json/drawings.json').then((data) => {
  categories.forEach((category) => {
    const categoryDiv = $(`#${category}`);

    // 🔧 Creează div-ul .container-cu-poze
    const containerCuPoze = $("<div class='container-cu-poze'>");

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

      containerCuPoze.append(div);
    });

    // 🧱 Elimină .items dacă există și adaugă .container-cu-poze
    categoryDiv.find('.items').remove(); // opțional, dacă există
    categoryDiv.append(containerCuPoze);
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
