// RECURSO NOVO: animação ao rolar a página
// O IntersectionObserver "vigia" os elementos e avisa quando eles entram na tela.
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      // 1) faz o elemento aparecer (classe definida no CSS)
      entrada.target.classList.add('visivel');

      // 2) se tiver barra de habilidade dentro, enche até o nível do data-nivel
      const barra = entrada.target.querySelector('.progress-bar');
      if (barra) {
        barra.style.width = barra.dataset.nivel + '%';
        barra.textContent = barra.dataset.nivel + '%';
      }

      observador.unobserve(entrada.target); // anima só uma vez
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.revelar').forEach((el) => observador.observe(el));

// Fecha o menu no celular depois de clicar em um link
document.querySelectorAll('#navItens .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('navItens');
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// Formulário de contato (simulado: mostra uma mensagem de sucesso)
document.getElementById('formContato').addEventListener('submit', (evento) => {
  evento.preventDefault();
  document.getElementById('alerta').classList.remove('d-none');
  evento.target.reset();
});
