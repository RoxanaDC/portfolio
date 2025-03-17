document.addEventListener('DOMContentLoaded', () => {
  console.log('Script loaded!'); // Verificare
  const numParticles = 10;

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Poziție inițială aleatorie
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    // Destinație aleatorie
    const endX = (Math.random() - 0.5) * 600 + 'px'; // Se mișcă max ±300px
    const endY = (Math.random() - 0.5) * 600 + 'px';

    // Aplicăm stilurile dinamice
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    particle.style.setProperty('--x', endX);
    particle.style.setProperty('--y', endY);
    particle.style.animationDuration = `${3 + Math.random() * 5}s`; // Între 3s și 8s
    particle.style.animationDelay = `${Math.random() * 2}s`; // Întârziere random

    document.body.appendChild(particle);
  }
});
