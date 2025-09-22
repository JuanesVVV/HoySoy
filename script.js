const patterns = document.querySelectorAll('.pattern');
const resultBox = document.getElementById('result');
const title = document.getElementById('personality-title');
const description = document.getElementById('personality-description');

const personalities = {
  creativo: {
    title: '🎨 Creativo',
    description: 'Tienes una mente imaginativa, te encanta explorar ideas nuevas y expresarte de forma original.'
  },
  analítico: {
    title: '📊 Analítico',
    description: 'Eres lógico, detallista y te gusta entender cómo funcionan las cosas. Buscas patrones y soluciones.'
  },
  empático: {
    title: '💞 Empático',
    description: 'Te conectas con las emociones de los demás, valoras la armonía y te importa el bienestar colectivo.'
  },
  líder: {
    title: '🧭 Líder',
    description: 'Tienes visión, iniciativa y te gusta tomar decisiones. Inspiras a otros con tu determinación.'
  }
};

patterns.forEach(pattern => {
  pattern.addEventListener('click', () => {
    const type = pattern.dataset.personality;
    title.textContent = personalities[type].title;
    description.textContent = personalities[type].description;
    resultBox.classList.remove('hidden');
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });
});
