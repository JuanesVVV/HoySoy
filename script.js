const patterns = document.querySelectorAll('.pattern');
const result = document.getElementById('result');

const descriptions = {
  creativo: 'Eres una persona creativa, imaginativa y llena de ideas originales.',
  analítico: 'Tienes una mente lógica, te gusta resolver problemas y buscar patrones.',
  empático: 'Eres sensible a las emociones de los demás y valoras las relaciones humanas.',
  líder: 'Tienes iniciativa, visión y te gusta tomar decisiones con confianza.'
};

patterns.forEach(pattern => {
  pattern.addEventListener('click', () => {
    const type = pattern.dataset.personality;
    result.textContent = descriptions[type];
  });
});
