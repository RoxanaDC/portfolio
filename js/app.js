/* 1. TREBUIE PUS IN ----------- APP.JS ------- CARE SE AFLA IN ------- ALL PAGES HTML (INDEX(HOME) - DEV_WEB - GRAPHISTE)---------THEMELE DARK / LIGHT------------ */

document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
  }
});
