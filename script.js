function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("nav-active");
}

/* ===================== NOVO TIMER ===================== */
// A data do seu casamento foi mantida: 21 de Novembro de 2025
const DATA_EVENTO = new Date('2025-11-21T00:00:00-03:00');

function atualizaTimer() {
  const agora = new Date();
  const diff = DATA_EVENTO - agora;

  // Função para facilitar a atualização do texto no HTML
  const el = (id, v) => (document.getElementById(id).textContent = v);

  // Se a data do evento já passou, zera o contador
  if (diff <= 0) {
    el('dias', 0); el('horas', 0); el('minutos', 0); el('segundos', 0);
    return;
  }

  // Calcula os dias, horas, minutos e segundos restantes
  const dias     = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas    = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos  = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  // Atualiza os valores no HTML
  el('dias', dias);
  el('horas', horas);
  el('minutos', minutos);
  el('segundos', segundos);
}

// Roda a função a cada segundo
setInterval(atualizaTimer, 1000);
// Roda a função uma vez ao carregar a página
atualizaTimer();



const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

 function copiarPix() {
    const codigoPix = '6441eb22-cc97-4401-9a09-f73a539d1a88';
    
    navigator.clipboard.writeText(codigoPix)
      .then(() => {
        alert("Código PIX copiado com sucesso!");
      })
      .catch(err => {
        alert("Erro ao copiar o código. Tente novamente.");
        console.error('Erro ao copiar:', err);
      });
  }

// Inicialmente esconde
backToTop.style.display = 'none';