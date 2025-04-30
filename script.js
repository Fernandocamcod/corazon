document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const heartText = document.querySelector('.heart-text');
    const petalsContainer = document.querySelector('.petals-container');
    
    // Mensajes configurables
    const messages = [
        "Te amo", 
        "Eres mi vida", 
        "Para siempre", 
        "Mi corazón es tuyo Daniela ",
        "❤️",
        
    ];
    
    // Sistema de pétalos optimizado para móvil
    let petalCount = 0;
    const maxPetals = window.innerWidth < 768 ? 30 : 50; // Ajuste automático
    
    function createPetal() {
        if (petalCount >= maxPetals) return;
        
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Configuración responsive
        const duration = Math.random() * 5 + 3;
        petal.style.cssText = `
            left: ${Math.random() * 100}vw;
            animation-duration: ${duration}s;
            animation-delay: ${Math.random() * -5}s;
            filter: drop-shadow(0 0 1vmin rgba(255, 107, 107, 0.7));
        `;
        
        petalCount++;
        petal.addEventListener('animationend', () => {
            petal.remove();
            petalCount--;
        });
        
        petalsContainer.appendChild(petal);
    }
    
    // Lluvia constante (optimizada para móvil)
    function startRain() {
        createPetal();
        if (petalCount < maxPetals * 0.7) { // Mantener cantidad óptima
            setTimeout(startRain, 300);
        } else {
            setTimeout(startRain, 1000);
        }
    }
    
    // Cambiar mensaje al tocar cualquier parte de la pantalla
    container.addEventListener('click', () => {
        // Efecto visual
        container.style.transform = 'scale(0.98)';
        setTimeout(() => container.style.transform = 'scale(1)', 200);
        
        // Cambiar texto con transición suave
        heartText.style.opacity = '0';
        setTimeout(() => {
            heartText.textContent = messages[Math.floor(Math.random() * messages.length)];
            heartText.style.opacity = '1';
        }, 200);
        
        // Lluvia adicional
        for (let i = 0; i < 5; i++) {
            setTimeout(createPetal, i * 150);
        }
        
        // Vibración en dispositivos móviles
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    });
    
    // Iniciar
    startRain();
    
    // Ajustar en redimensionamiento
    window.addEventListener('resize', () => {
        const heart = document.querySelector('.heart');
        heart.style.width = '25vmin';
        heart.style.height = '23vmin';
    });
});
