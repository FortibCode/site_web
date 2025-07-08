document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('scale-up');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('scale-up');
    });
  });
});
