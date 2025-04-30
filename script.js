const heart = document.querySelector('.heart');
const petalsContainer = document.querySelector('.petals-container');
const colors = ['pink', 'red'];
let petalInterval;

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.classList.add(colors[Math.floor(Math.random() * colors.length)]);
    
    // Posición horizontal aleatoria
    petal.style.left = `${Math.random() * 100}vw`;
    
    // Configuración de animación
    const duration = Math.random() * 3 + 2;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `-${Math.random() * 5}s`;
    
    // Eliminar el pétalo después de que termine la animación
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);

    petalsContainer.appendChild(petal);
}

function startPetals() {
    // Limpiar cualquier intervalo existente
    if (petalInterval) clearInterval(petalInterval);
    // Crear pétalos cada 200ms
    petalInterval = setInterval(createPetal, 200);
}

// Iniciar la lluvia de pétalos
startPetals();

// Animación al hacer clic en el corazón
heart.addEventListener('click', () => {
    heart.classList.add('clicked');
    setTimeout(() => {
        heart.classList.remove('clicked');
    }, 300);
    
    // Aumentar temporalmente la cantidad de pétalos al hacer clic
    clearInterval(petalInterval);
    setInterval(createPetal, 50);
    setTimeout(startPetals, 800);
});

// Optimización: Limpiar pétalos cuando no son visibles
setInterval(() => {
    const petals = document.querySelectorAll('.petal');
    const now = Date.now();
    petals.forEach(petal => {
        const style = getComputedStyle(petal);
        const opacity = parseFloat(style.opacity);
        if (opacity < 0.1) {
            petal.remove();
        }
    });
}, 1000);
const messages = ["Te amo", "Eres mi vida", "Para siempre", "Mi corazón es tuyo Daniela"];
heart.addEventListener('click', () => {
  document.querySelector('.heart-text').textContent = 
    messages[Math.floor(Math.random() * messages.length)];
});