/**
 * @param {string} elementId 
 * @param {string} texto 
 * @param {number} [velocidade=100] 
 */

const texto = "Seja bem-vindo à UFAL Unidade Penedo!";
const titulo = document.getElementById("titulo-animado");
let index = 0;

function digitarTexto() {
  if (index < texto.length) {
    titulo.innerHTML = texto.substring(0, index + 1) + '<span class="cursor">|</span>';
    index++;
    setTimeout(digitarTexto, 100);
  } else {
    titulo.innerHTML = texto;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  digitarTexto();

  const elementos = document.querySelectorAll('.scroll-reveal');
  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observer.unobserve(entrada.target);
      }
    });
  }, {
    threshold: 0.1
  });

  elementos.forEach(el => observer.observe(el));
});


