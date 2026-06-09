// Comportamento da tela do bolo
document.addEventListener('DOMContentLoaded', () => {
    const birthdayScreen = document.getElementById('birthday-screen');
    let somSurpresaTocado = false;  // Garante que o som toque apenas uma vez
    
    function initBirthdayScreen() {
        console.log('Tela do bolo ativada!');
        
        // Toca o som de surpresa (apenas uma vez)
        if (!somSurpresaTocado) {
            somSurpresaTocado = true;
            AudioManager.tocar('surpresa');
            AudioManager.tocar('claps');
            AudioManager.tocar('feliz');
            console.log('Som de surpresa tocado!');
        }
        
        // Pega as duas velas
        const vela1 = document.getElementById('vela1');
        const vela2 = document.getElementById('vela2');
        
        // Função para apagar a vela
        function apagarVela(vela) {
            if (vela && !vela.classList.contains('vela-apagada')) {
                vela.classList.add('vela-apagada');
                console.log('Vela apagada!');
                
                // Toca o som de sopro usando o AudioManager
                AudioManager.tocar('sopro');
            }
        }
        
        // Adiciona evento de clique na vela 1
        if (vela1) {
            vela1.addEventListener('click', (e) => {
                e.stopPropagation();
                apagarVela(vela1);
            });
        }
        
        // Adiciona evento de clique na vela 2
        if (vela2) {
            vela2.addEventListener('click', (e) => {
                e.stopPropagation();
                apagarVela(vela2);
            });
        }
    }
    
    // Verifica se a tela do bolo já está ativa
    if (birthdayScreen.classList.contains('active')) {
        initBirthdayScreen();
    }
    
    // Observa quando a tela do bolo se torna ativa
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
                if (birthdayScreen.classList.contains('active')) {
                    initBirthdayScreen();
                }
            }
        });
    });
    
    observer.observe(birthdayScreen, { attributes: true });
});