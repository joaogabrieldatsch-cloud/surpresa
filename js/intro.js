document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-button');
    const titleImage = document.getElementById('title-image');
    const introScreen = document.getElementById('intro-screen');

    if (openBtn) {
        openBtn.addEventListener('click', () => {
            console.log('Botão ABRIR clicado! Iniciando animações...');

            // 1. Título sobe e some
            if (titleImage) {
                titleImage.classList.add('hide-up');
            }

            // 2. Botão desce e some
            if (openBtn) {
                openBtn.classList.add('hide-down');
            }

            // 3. Aplica o zoom na tela inteira
            if (introScreen) {
                introScreen.classList.add('zoom-effect');
            }

            // 4. Após as animações terminarem (1.2 segundos), vai para a tela do bolo
            setTimeout(() => {
                console.log('Animações concluídas! Carregando tela do bolo...');
                // Troca para a tela do bolo
                switchScreen('intro-screen', 'birthday-screen');
            }, 1200);
        });
    }
});