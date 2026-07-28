// JavaScript de Dayanro

document.getElementById('year').textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', () => {
      button.style.transform = 'translateY(-2px) scale(.98)';
      setTimeout(() => { button.style.transform = ''; }, 150);
    });
  });
}
