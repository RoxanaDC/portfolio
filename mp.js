const maxParticles = 5; // Limita maximă de particule active
let currentParticles = 0; // Contorul particulelor existente

function createParticle() {
  if (currentParticles >= maxParticles) return; // Dacă sunt deja 5 de particule, nu mai adăugăm

  const particle = document.createElement('div');
  particle.classList.add('particle');
  currentParticles++; // Creștem numărul de particule active

  // Coordonate inițiale (poziție aleatorie pe ecran)
  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * window.innerHeight;

  // Coordonate finale (unde se va muta particula)
  const endX = Math.random() * window.innerWidth;
  const endY = Math.random() * window.innerHeight;

  // Aplicăm poziția inițială
  particle.style.left = `${startX}px`;
  particle.style.top = `${startY}px`;

  // Definim valorile de transformare (diferența dintre start și end)
  particle.style.setProperty('--translateX', endX - startX);
  particle.style.setProperty('--translateY', endY - startY);

  // Generăm o durată aleatorie a animației între 5s și 8s
  const duration = Math.random() * 8 + 5 + 's';
  const opacity = Math.random() * 0.4 + 0.3; // Opacitate între 0.4 și 0.3

  // Aplicăm stilurile de animație
  particle.style.animation = `particle-move ${duration} linear forwards`;
  particle.style.opacity = opacity;

  document.body.appendChild(particle);

  // Când animația se termină, ștergem particula și scădem contorul
  particle.addEventListener('animationend', () => {
    particle.remove();
    currentParticles--;
  });
}

// Creează o particulă nouă la fiecare 300ms
setInterval(() => {
  createParticle();
}, 500);
