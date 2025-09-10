// scripts.js — funciones simples: menú hamburguesa y año dinámico
document.addEventListener('DOMContentLoaded', function(){
  // Año en el footer
  const anio = new Date().getFullYear();
  document.getElementById('anio').textContent = anio;

  // Hamburguesa menú (móvil)
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');

  hamburger.addEventListener('click', function(){
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  // Efecto parallax simple en hero (movimiento sutil basado en scroll)
  const heroImage = document.querySelector('.hero-media img');
  window.addEventListener('scroll', function(){
    const sc = window.scrollY;
    if(heroImage) heroImage.style.transform = `translateY(${sc * 0.06}px) scale(1.06)`;
  });

  // Mejora: cerrar menú al hacer click en un enlace (móvil)
  document.querySelectorAll('.main-nav a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
});
